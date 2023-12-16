"use client"

import {Paper, Stack, Typography, Card, CardActions, CardContent, CardMedia, Button, Grid, Box} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

type Props = {
    name: string,
    date: Date,
    place: string,
    description: string,
    peopleSigned: number,
    peopleMax: number,
    imageUrl: string
}

export default function EventCard(props: Props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={props.imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <CalendarMonthIcon sx={{verticalAlign:"middle", mr: 1}}/>
                    {new Date(props.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <PlaceIcon sx={{verticalAlign:"middle", mr: 1}}/>
                    {props.place}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container justifyContent="flex-end">
                    {
                        props.peopleSigned == props.peopleMax ?
                            <Button>
                                <ChatBubbleOutlineIcon sx={{verticalAlign:"middle", mr: 1}} /> Chat
                            </Button>
                            :
                            <Button variant={"outlined"} disabled>
                                {props.peopleSigned}/{props.peopleMax} osoby
                            </Button>
                    }
                </Grid>
            </CardActions>
        </Card>
    )
}
