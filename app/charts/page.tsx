"use client"

import * as React from 'react';

import { BarChart } from '@mui/x-charts/BarChart';
import { Button, Chip } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { LineChart } from "@mui/x-charts";
import Box from "@mui/material/Box";
import "./styles.scss";

enum ChartOption {
    comfort,
    entertainment,
    others
}

const y1 = [5, 5, 10, 90, 85, 70, 30, 5, 5, 10, 90, 85, 70, 30, 5, 5, 10, 90, 85, 70, 30, 5, 5, 10, 90, 85, 70, 30, 5, 5, 10, 90, 85, 70, 30, 5, 5, 10, 90, 85, 70, 30, 5, 5, 10, 90, 85, 70, 30, 5, 5, 10, 90, 85, 70, 30, 5, 5, 10, 90, 85, 70, 30];

const valueFormatter = (date: Date) =>
    date.getHours() === 0
        ? date.toLocaleDateString('fr-FR', {
            month: '2-digit',
            day: '2-digit',
        })
        : date.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
        });

export default function Charts() {
    const [chartOption, setChartOption] = useState<ChartOption>(ChartOption.comfort)

    const [comfort, setComfort] = useState<number[]>([1, 2, 3, 4, 3, 3, 2]);
    const [entertainment, setEntertainment] = useState<number[]>([4, 2, 3, 4, 7, 8, 4]);
    const [others, setOthers] = useState<number[]>([3, 1, 2, 3, 7, 8, 4]);

    const [workLifeBalance, setWorkLifeBalance] = useState(y1.slice(0, 7));

    const chartData = useMemo(() => {
        if (chartOption == ChartOption.comfort) {
            return comfort;
        } else if (chartOption == ChartOption.entertainment) {
            return entertainment;
        } else {
            return others;
        }
    }, [chartOption, comfort, entertainment, others])

    const choseWorkLifeBalance = useCallback((i: number) => {
        setWorkLifeBalance(y1.slice(0, i));
    }, [])

    const config = {
        series: [{ data: workLifeBalance }],
        height: 300,
        bottomAxis: null,
        leftAxis: null,
    };

    return <span id="charts">
        <h1 style={{ color: "black", width: "100%", textAlign: "center" }}>
            Work-Life Balance
        </h1>
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <LineChart
                {...config}
            />
        </Box>
        <Box sx={{ marginBottom: 2, display: "flex", justifyContent: "space-evenly", width: "100%" }}>
            <Chip label="1 tydzień" color="primary" onClick={() => {
                choseWorkLifeBalance(7)
            }} />
            <Chip label="1 miesiąc" color="primary" onClick={() => {
                choseWorkLifeBalance(31)
            }} />
            <Chip label="1 rok" color="primary" onClick={() => {
                choseWorkLifeBalance(365)
            }} />
        </Box>
        <h1 style={{ color: "black", width: "100%", textAlign: "center" }}>
            {chartOption == ChartOption.comfort && "Samopoczucie"}
            {chartOption == ChartOption.entertainment && "Rozrywka"}
            {chartOption == ChartOption.others && "Inne"}
        </h1>
        <Box sx={{ marginBottom: 2, display: "flex", justifyContent: "space-evenly", width: "100%" }}>
            <BarChart
                series={[{ data: chartData }]}
                xAxis={[{
                    scaleType: 'band',
                    data: ['Pn \n 11/12', 'Wt \n 12/12', 'Śr \n 13/12', 'Czw \n 14/12', 'Pt \n 15/12', 'Sb \n 16/12', 'Ndz \n 17/12']
                }]}
                height={300}
                width={300}
                leftAxis={null}
            />
        </Box>
        <Box sx={{ marginBottom: 2, display: "flex", justifyContent: "space-evenly", width: "100%" }}>
            <Chip label="Samopoczucie" color="primary" onClick={() => {
                setChartOption(ChartOption.comfort)
            }} />
            <Chip label="Rozrywka" color="primary" onClick={() => {
                setChartOption(ChartOption.entertainment)
            }} />
            <Chip label="Inne" color="primary" onClick={() => {
                setChartOption(ChartOption.others)
            }} />
        </Box>
    </span>
}