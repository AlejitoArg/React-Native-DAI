import React, { useEffect, useState } from "react";
import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const axios = require('axios');

const Plato = (props) => {    
    return (
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    );
}

export default Plato;