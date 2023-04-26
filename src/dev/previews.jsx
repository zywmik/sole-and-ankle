import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import ShoeIndex from "../components/ShoeIndex";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ShoeIndex">
                <ShoeIndex/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews