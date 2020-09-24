import React, { Component } from 'react'
import Name from "./CharacterComponents/Name";
import Image from "./CharacterComponents/Image";
import Attribute from "./CharacterComponents/Attribute";
import UpdateDelete from "./CharacterComponents/UpdateDelete";

export default class Character extends Component {
    render() {
        return (
            <div>
                <Name />
                <Image />
                <Attribute />
                <UpdateDelete />
            </div>
        )
    }
}
