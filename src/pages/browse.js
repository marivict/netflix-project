import React from 'react';
import {useContent} from '../hooks'
import {selectionFilter} from '../utils'
import BrowseContainer from '../containers/browse'

export default function Browser(){
    //we need the series and the films
    const {series}= useContent('series')
    const {films} = useContent('films')

    //we need slides

    const slides = selectionFilter({series, films})
    //pass it to browse container
    return <BrowseContainer slides={slides} />
}