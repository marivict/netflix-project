import React from 'react'
import {Container, Title, Item, Subtitle, Pane, Image, Inner} from './styles/jumbotron'
function Jumbotron({children, direction = 'row', ...restProps}){
    return(
        <Item>
            <Inner {...restProps} direction = {direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.Subtitle = function JumbotronSubtitle({children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
}
Jumbotron.Pane = function JumbotronPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Image = function JumbotronImage({children, ...restProps}){
    return <Image {...restProps}>{children}</Image>
}

export default Jumbotron