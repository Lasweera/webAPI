import React, { Component } from "react";
import axios from "axios";
import Cat from "./cat";


class Cats extends Component {
    state = {
        allCats: [],
    };
    render() {
        console.log("Rendering Cats component.....")
        return (
            <div className="container">
                <div className="row">
                    {this.state.allCats.map((cat) => (
                        <div key={cat.id} className="col">
                            <Cat
                                key={cat.id}
                                cat={cat}
                                onDelete={() => this.deleteCat(cat.id)}
                                onLike={() => this.likeCat(cat)}
                               
                            />

                        </div>
                    ))}
                </div>
            </div>
        );
    }
    async likeCat(cat) {
        try {
            await axios.put(`http://localhost:5000/api/cats/${cat.id}`, {
                likeCount: cat.likeCount + 1,
            });
            let allCats = [...this.state.allCats]
            let index = allCats.indexOf(cat)
            allCats[index] = { ...cat }
            allCats[index].likeCount++
            this.setState({ allCats: allCats });
        } catch (err) {
            console.log(err);
        }
    }

    async componentDidMount() {
        console.log("Rendering finished. Component is fully mounted");
        let { data } = await axios.get("http://localhost:5000/api/cats");
        //console.log(data);
        let cats = data.map((cat) => {
            return {
                id: cat._id,
                imageUrl: cat.imageUrl,
                birthName: cat.birthName,
                likeCount: cat.likeCount,
                catName: cat.name,
                gender: cat.gender,
                description: cat.description
            };
        });
        this.setState({ allCats: cats });
    }
    async deleteCat(catId) {
        let updatedCatArray = this.state.allCats.filter(
            (cat) => cat.id !== catId
        );

        await axios.delete(`http://localhost:5000/api/cats/${catId}`)
        this.setState({ allCats: updatedCatArray });
    }
}

export default Cats;
