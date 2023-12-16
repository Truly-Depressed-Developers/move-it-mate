"use client"

import { Paper, Stack } from "@mui/material";
import EventCard from "./EventCard";
import "./styles.scss";

export default function Dashboard() {
    return (
        <Paper id={"mainCharts"} sx={{ maxHeight: '100%', overflow: 'auto' }}>
            <Stack spacing={3} alignItems={"center"} sx={{ mt: 4, mb: 4 }}>
                <EventCard
                    date={new Date(1703347200000)}
                    description={"Największe centrum rozrywki w Krakowie! Kręgle, bilard, gry video, disco!"}
                    name={"Kręgielnia Bowling House"}
                    place={"Klimeckiego 14B"}
                    peopleSigned={2}
                    peopleMax={4}
                    imageUrl={"https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/305832920_490841183048045_1144775286124233738_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=3Vu6gcMei6IAX82y6Mg&_nc_ht=scontent-waw1-1.xx&oh=00_AfCaFExVDwGrqASnjmWRhZTaMsD6WGkzRMlMS6Ao1JgN-g&oe=6581C3CE"}></EventCard>
                <EventCard
                    date={new Date(1703347200000)}
                    description={"Największe centrum rozrywki w Krakowie! Kręgle, bilard, gry video, disco!"}
                    name={"Kręgielnia Bowling House"}
                    place={"Klimeckiego 14B"}
                    peopleSigned={4}
                    peopleMax={4}
                    imageUrl={"https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/305832920_490841183048045_1144775286124233738_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=3Vu6gcMei6IAX82y6Mg&_nc_ht=scontent-waw1-1.xx&oh=00_AfCaFExVDwGrqASnjmWRhZTaMsD6WGkzRMlMS6Ao1JgN-g&oe=6581C3CE"}></EventCard>
                <EventCard
                    date={new Date(1703347200000)}
                    description={"Największe centrum rozrywki w Krakowie! Kręgle, bilard, gry video, disco!"}
                    name={"Kręgielnia Bowling House"}
                    place={"Klimeckiego 14B"}
                    peopleSigned={4}
                    peopleMax={4}
                    imageUrl={"https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/305832920_490841183048045_1144775286124233738_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=3Vu6gcMei6IAX82y6Mg&_nc_ht=scontent-waw1-1.xx&oh=00_AfCaFExVDwGrqASnjmWRhZTaMsD6WGkzRMlMS6Ao1JgN-g&oe=6581C3CE"}></EventCard>
                <EventCard
                    date={new Date(1703347200000)}
                    description={"Największe centrum rozrywki w Krakowie! Kręgle, bilard, gry video, disco!"}
                    name={"Kręgielnia Bowling House"}
                    place={"Klimeckiego 14B"}
                    peopleSigned={4}
                    peopleMax={4}
                    imageUrl={"https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/305832920_490841183048045_1144775286124233738_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=3Vu6gcMei6IAX82y6Mg&_nc_ht=scontent-waw1-1.xx&oh=00_AfCaFExVDwGrqASnjmWRhZTaMsD6WGkzRMlMS6Ao1JgN-g&oe=6581C3CE"}></EventCard>
            </Stack>
        </Paper>
    )
}
