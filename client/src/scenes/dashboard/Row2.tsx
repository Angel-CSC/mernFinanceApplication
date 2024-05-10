import DashboardBox from '@/components/DashboardBox'
import { Month } from '@/state/types';
import { useMemo } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Pie, PieChart, Cell, ScatterChart, Scatter, ZAxis } from 'recharts';
import BoxHeader from '@/components/BoxHeader';
import FlexBetween from '@/components/FlexBetween';
import { Box, Typography, useTheme } from '@mui/material';

const pieData = [
  { name: "Group A", value: 0},
  { name: "Group B", value: 0}
];

const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]]
  interface Product{
    _id: string;
    price: string;
    expense: string;
    transactions: Array<string>;
  }

  const products: Array<Product> = [
    {
      _id: "63bf7ac9f03239e002001600",
      price: "$43.41",
      expense: "$5.97",
      transactions: [
        "63bf7ccef03239554c002449",
        "63bf7ccef03239855d00155c",
        "63bf7ccef032397b4f001603",
        "63bf7ccef03239eb9d0016d4",
      ],
    },
    {
      _id: "63bf7ac9f03239e002001601",
      price: "$60.13",
      expense: "$9.12",
      transactions: [
        "63bf7ccef032396a8e001696",
        "63bf7ccef0323922d2001694",
        "63bf7ccef03239855d001557",
        "63bf7ccef03239554c00244d",
      ],
    },
    {
      _id: "63bf7ac9f03239e002001602",
      price: "$195.05",
      expense: "$6.72",
      transactions: ["63bf7ccef03239e002001606", "63bf7ccef0323922d200169a"],
    },
    {
      _id: "63bf7ac9f03239e002001603",
      price: "$46.25",
      expense: "$9.95",
      transactions: [
        "63bf7ccef03239aec900155b",
        "63bf7ccef03239eb9d0016d3",
        "63bf7ccef03239aec9001559",
      ],
    },
    {
      _id: "63bf7ac9f03239e002001604",
      price: "$87.41",
      expense: "$7.97",
      transactions: [
        "63bf7ccef03239855d00155d",
        "63bf7ccef03239855d001561",
        "63bf7ccef03239e00200160e",
        "63bf7ccef0323922d2001697",
        "63bf7ccef032394f5f002442",
      ],
    },
    {
      _id: "63bf7ac9f03239e002001605",
      price: "$73.28",
      expense: "$7.85",
      transactions: [
        "63bf7ccef03239966c0016a0",
        "63bf7ccef03239966c00169f",
        "63bf7ccef032394cbd0016a0",
        "63bf7ccef03239554c002453",
        "63bf7ccef0323901e6001557",
      ],
    },
    {
      _id: "63bf7ac9f03239343e00169b",
      price: "$130.65",
      expense: "$7.95",
      transactions: ["63bf7ccef0323901e6001560", "63bf7ccef032396d89000013"],
    },
    {
      _id: "63bf7ac9f03239343e00169c",
      price: "$198.54",
      expense: "$9.50",
      transactions: [
        "63bf7ccef03239eb9d0016d9",
        "63bf7ccef032396a8e001696",
        "63bf7ccef03239cf1b0016a7",
        "63bf7ccef0323901e6001562",
      ],
    },
    {
      _id: "63bf7ac9f03239343e00169d",
      price: "$147.32",
      expense: "$5.86",
      transactions: ["63bf7ccef03239343e0016a9", "63bf7ccef03239f920001690"],
    },
    {
      _id: "63bf7ac9f03239343e00169e",
      price: "$187.22",
      expense: "$5.82",
      transactions: [
        "63bf7ccef03239aec9001560",
        "63bf7ccef032396d8900000f",
        "63bf7ccef0323922d2001697",
      ],
    },
    {
      _id: "63bf7ac9f03239343e00169f",
      price: "$162.43",
      expense: "$3.28",
      transactions: [
        "63bf7ccef032395ccf001697",
        "63bf7ccef0323901e600155e",
        "63bf7ccef03239aec9001559",
      ],
    },
    {
      _id: "63bf7ac9f03239343e0016a0",
      price: "$30.09",
      expense: "$8.55",
      transactions: ["63bf7ccef03239343e0016a3"],
    },
    {
      _id: "63bf7ac9f0323901e6001551",
      price: "$31.07",
      expense: "$4.98",
      transactions: [
        "63bf7ccef032395ccf001695",
        "63bf7ccef03239eb9d0016dd",
        "63bf7ccef032397b4f001606",
        "63bf7ccef03239855d00155b",
        "63bf7ccef032397b4f001604",
      ],
    },
    {
      _id: "63bf7ac9f0323901e6001552",
      price: "$12.21",
      expense: "$6.82",
      transactions: [
        "63bf7ccef03239855d00155c",
        "63bf7ccef032395ccf001696",
        "63bf7ccef03239cf1b0016a2",
        "63bf7ccef032396a8e00169a",
        "63bf7ccef03239966c00169a",
      ],
    },
    {
      _id: "63bf7ac9f0323901e6001553",
      price: "$76.31",
      expense: "$3.84",
      transactions: [
        "63bf7ccef03239e002001608",
        "63bf7ccef0323922d200169b",
        "63bf7ccef03239eb9d0016e6",
      ],
    },
    {
      _id: "63bf7ac9f0323901e6001554",
      price: "$169.87",
      expense: "$8.35",
      transactions: [
        "63bf7ccef03239eb9d0016d5",
        "63bf7ccef03239966c00169e",
        "63bf7ccef0323974200016a7",
      ],
    },
    {
      _id: "63bf7ac9f0323901e6001555",
      price: "$187.36",
      expense: "$8.12",
      transactions: [
        "63bf7ccef032394f5f00243a",
        "63bf7ccef03239eb9d0016de",
        "63bf7ccef03239f920001696",
      ],
    },
    {
      _id: "63bf7ac9f0323901e6001556",
      price: "$67.29",
      expense: "$6.32",
      transactions: [
        "63bf7ccef032396d89000015",
        "63bf7ccef03239f920001690",
        "63bf7ccef03239eb9d0016d2",
      ],
    },
    {
      _id: "63bf7ac9f032394cbd001699",
      price: "$85.35",
      expense: "$9.33",
      transactions: [
        "63bf7ccef03239aec9001558",
        "63bf7ccef03239f92000169a",
        "63bf7ccef03239742000169d",
        "63bf7ccef03239554c00244a",
      ],
    },
    {
      _id: "63bf7ac9f032394cbd00169a",
      price: "$35.75",
      expense: "$9.93",
      transactions: [
        "63bf7ccef03239554c002453",
        "63bf7ccef03239e002001608",
        "63bf7ccef0323937a500168d",
      ],
    },
    {
      _id: "63bf7ac9f032394cbd00169b",
      price: "$59.80",
      expense: "$1.51",
      transactions: [
        "63bf7ccef0323937a5001690",
        "63bf7ccef03239e00200160b",
        "63bf7ccef032394f5f002441",
        "63bf7ccef0323975d60016a3",
        "63bf7ccef032395ccf00169f",
      ],
    },
    {
      _id: "63bf7ac9f032394cbd00169c",
      price: "$86.45",
      expense: "$3.55",
      transactions: ["63bf7ccef032396d8900000f"],
    },
    {
      _id: "63bf7ac9f032394cbd00169d",
      price: "$142.21",
      expense: "$1.85",
      transactions: ["63bf7ccef032396a8e001698", "63bf7ccef03239eb9d0016d0"],
    },
    {
      _id: "63bf7ac9f032394cbd00169e",
      price: "$10.01",
      expense: "$5.61",
      transactions: [
        "63bf7ccef03239e002001610",
        "63bf7ccef03239f920001699",
        "63bf7ccef03239966c00169a",
        "63bf7ccef03239e002001611",
        "63bf7ccef032394cbd00169f",
      ],
    },
    {
      _id: "63bf7ac9f03239cf1b001698",
      price: "$112.78",
      expense: "$6.74",
      transactions: ["63bf7ccef032396a8e00169d", "63bf7ccef032396a8e001695"],
    },
    {
      _id: "63bf7ac9f03239cf1b001699",
      price: "$156.34",
      expense: "$6.26",
      transactions: ["63bf7ccef03239e002001606"],
    },
    {
      _id: "63bf7ac9f03239cf1b00169a",
      price: "$119.34",
      expense: "$8.62",
      transactions: ["63bf7ccef0323975d600169e", "63bf7ccef03239554c00244b"],
    },
    {
      _id: "63bf7ac9f03239cf1b00169b",
      price: "$87.49",
      expense: "$8.74",
      transactions: ["63bf7ccef03239343e0016ac", "63bf7ccef0323937a5001698"],
    },
    {
      _id: "63bf7ac9f03239cf1b00169c",
      price: "$34.52",
      expense: "$2.31",
      transactions: ["63bf7ccef03239aec9001562", "63bf7ccef0323937a500168d"],
    },
    {
      _id: "63bf7ac9f03239cf1b00169d",
      price: "$90.83",
      expense: "$7.83",
      transactions: [
        "63bf7ccef0323975d6001698",
        "63bf7ccef032394f5f002439",
        "63bf7ccef03239e00200160f",
        "63bf7ccef0323975d600169b",
        "63bf7ccef03239aec9001557",
      ],
    },
    {
      _id: "63bf7ac9f03239aec9001551",
      price: "$181.98",
      expense: "$3.02",
      transactions: [
        "63bf7ccef032395ccf001698",
        "63bf7ccef03239343e0016ab",
        "63bf7ccef0323975d60016a2",
        "63bf7ccef03239cf1b0016a7",
      ],
    },
    {
      _id: "63bf7ac9f03239aec9001552",
      price: "$62.17",
      expense: "$9.52",
      transactions: ["63bf7ccef03239855d00155e", "63bf7ccef03239966c00169e"],
    },
    {
      _id: "63bf7ac9f03239aec9001553",
      price: "$83.76",
      expense: "$1.09",
      transactions: [
        "63bf7ccef0323975d60016a3",
        "63bf7ccef032394f5f002444",
        "63bf7ccef03239554c002450",
        "63bf7ccef032395ccf00169b",
      ],
    },
    {
      _id: "63bf7ac9f03239aec9001554",
      price: "$62.47",
      expense: "$2.38",
      transactions: [
        "63bf7ccef03239eb9d0016e4",
        "63bf7ccef03239eb9d0016d0",
        "63bf7ccef03239966c00169b",
        "63bf7ccef03239eb9d0016d5",
        "63bf7ccef0323975d6001698",
      ],
    },
    {
      _id: "63bf7ac9f03239aec9001555",
      price: "$54.68",
      expense: "$5.12",
      transactions: [
        "63bf7ccef032396d89000013",
        "63bf7ccef0323974200016a7",
        "63bf7ccef0323922d2001699",
        "63bf7ccef03239e002001608",
      ],
    },
    {
      _id: "63bf7ac9f03239aec9001556",
      price: "$91.72",
      expense: "$4.73",
      transactions: [
        "63bf7ccef03239cf1b0016a3",
        "63bf7ccef032394f5f00243e",
        "63bf7ccef0323974200016a2",
      ],
    },
    {
      _id: "63bf7ac9f03239554c002443",
      price: "$159.65",
      expense: "$3.79",
      transactions: [
        "63bf7ccef03239554c00244e",
        "63bf7ccef03239855d001561",
        "63bf7ccef032395ccf00169b",
        "63bf7ccef03239343e0016aa",
        "63bf7ccef032394f5f002439",
      ],
    },
    {
      _id: "63bf7ac9f03239554c002444",
      price: "$190.89",
      expense: "$5.24",
      transactions: [
        "63bf7ccef03239343e0016a2",
        "63bf7ccef0323974200016a3",
        "63bf7ccef0323922d200169c",
        "63bf7ccef03239966c00169e",
        "63bf7ccef03239cf1b0016a7",
      ],
    },
    {
      _id: "63bf7ac9f03239554c002445",
      price: "$155.13",
      expense: "$1.68",
      transactions: [
        "63bf7ccef03239cf1b00169f",
        "63bf7ccef03239966c00169f",
        "63bf7ccef0323937a5001697",
        "63bf7ccef0323975d60016a2",
      ],
    },
    {
      _id: "63bf7ac9f03239554c002446",
      price: "$43.82",
      expense: "$7.85",
      transactions: ["63bf7ccef03239eb9d0016dd", "63bf7ccef0323901e6001557"],
    },
    {
      _id: "63bf7ac9f03239554c002447",
      price: "$58.31",
      expense: "$9.94",
      transactions: [
        "63bf7ccef03239cf1b0016a6",
        "63bf7ccef03239966c00169a",
        "63bf7ccef0323974200016a1",
        "63bf7ccef0323975d600169c",
      ],
    },
    {
      _id: "63bf7ac9f03239554c002448",
      price: "$138.47",
      expense: "$6.40",
      transactions: [
        "63bf7ccef032397b4f001606",
        "63bf7ccef03239f920001691",
        "63bf7ccef03239966c001698",
      ],
    },
    {
      _id: "63bf7ac9f032397420001696",
      price: "$10.40",
      expense: "$3.20",
      transactions: [
        "63bf7ccef03239966c00169a",
        "63bf7ccef032396d89000013",
        "63bf7ccef03239eb9d0016d6",
        "63bf7ccef032396a8e00169e",
      ],
    },
    {
      _id: "63bf7ac9f032397420001697",
      price: "$22.48",
      expense: "$5.36",
      transactions: ["63bf7ccef03239cf1b0016a6", "63bf7ccef03239eb9d0016df"],
    },
    {
      _id: "63bf7ac9f032397420001698",
      price: "$92.16",
      expense: "$9.12",
      transactions: [
        "63bf7ccef03239cf1b0016a9",
        "63bf7ccef032396d89000015",
        "63bf7ccef03239f920001691",
        "63bf7ccef03239f920001699",
      ],
    },
    {
      _id: "63bf7ac9f032397420001699",
      price: "$140.77",
      expense: "$9.02",
      transactions: [
        "63bf7ccef0323974200016a2",
        "63bf7ccef032395ccf00169c",
        "63bf7ccef0323937a500168d",
      ],
    },
    {
      _id: "63bf7ac9f03239742000169a",
      price: "$100.62",
      expense: "$6.55",
      transactions: [
        "63bf7ccef032394f5f002442",
        "63bf7ccef0323922d2001695",
        "63bf7ccef032395ccf001696",
        "63bf7ccef0323974200016a7",
      ],
    },
    {
      _id: "63bf7ac9f03239742000169b",
      price: "$69.13",
      expense: "$6.26",
      transactions: [
        "63bf7ccef03239eb9d0016d0",
        "63bf7ccef0323975d600169c",
        "63bf7ccef03239cf1b0016a8",
      ],
    },
    {
      _id: "63bf7ac9f03239966c001692",
      price: "$124.82",
      expense: "$8.49",
      transactions: [
        "63bf7ccef03239eb9d0016de",
        "63bf7ccef03239eb9d0016d3",
        "63bf7ccef0323974200016a7",
        "63bf7ccef032396d8900000e",
        "63bf7ccef032397b4f001607",
      ],
    },
    {
      _id: "63bf7ac9f03239966c001693",
      price: "$196.68",
      expense: "$3.32",
      transactions: [
        "63bf7ccef03239554c002452",
        "63bf7ccef0323922d2001698",
        "63bf7ccef03239aec9001562",
        "63bf7ccef03239855d00155f",
        "63bf7ccef0323901e600155f",
      ],
    },
    {
      _id: "63bf7ac9f03239966c001694",
      price: "$172.48",
      expense: "$2.38",
      transactions: [
        "63bf7ccef032394cbd0016a0",
        "63bf7ccef03239343e0016aa",
        "63bf7ccef032395ccf00169a",
        "63bf7ccef03239554c00244d",
        "63bf7ccef032396a8e001699",
      ],
    },
    {
      _id: "63bf7ac9f03239966c001695",
      price: "$112.84",
      expense: "$4.34",
      transactions: ["63bf7ccef032396d89000013", "63bf7ccef03239554c00244c"],
    },
    {
      _id: "63bf7ac9f03239966c001696",
      price: "$37.97",
      expense: "$5.76",
      transactions: [
        "63bf7ccef032394f5f002440",
        "63bf7ccef03239eb9d0016df",
        "63bf7ccef0323937a5001694",
        "63bf7ccef032396a8e001698",
        "63bf7ccef032396a8e001696",
      ],
    },
    {
      _id: "63bf7ac9f03239966c001697",
      price: "$123.72",
      expense: "$2.85",
      transactions: [
        "63bf7ccef03239eb9d0016e3",
        "63bf7ccef0323974200016a6",
        "63bf7ccef0323937a5001691",
      ],
    },
    {
      _id: "63bf7ac9f0323975d6001692",
      price: "$15.02",
      expense: "$2.00",
      transactions: ["63bf7ccef032396a8e001697", "63bf7ccef0323975d6001698"],
    },
    {
      _id: "63bf7ac9f0323975d6001693",
      price: "$19.69",
      expense: "$2.65",
      transactions: ["63bf7ccef0323937a500168e"],
    },
    {
      _id: "63bf7ac9f0323975d6001694",
      price: "$30.80",
      expense: "$5.02",
      transactions: [
        "63bf7ccef0323975d600169f",
        "63bf7ccef032394f5f002440",
        "63bf7ccef032396a8e001695",
        "63bf7ccef03239742000169c",
      ],
    },
    {
      _id: "63bf7ac9f0323975d6001695",
      price: "$90.56",
      expense: "$2.93",
      transactions: ["63bf7ccef0323975d600169d"],
    },
    {
      _id: "63bf7ac9f0323975d6001696",
      price: "$30.37",
      expense: "$8.63",
      transactions: [
        "63bf7ccef0323922d200169c",
        "63bf7ccef0323974200016a5",
        "63bf7ccef032394f5f002443",
      ],
    },
    {
      _id: "63bf7ac9f0323975d6001697",
      price: "$149.26",
      expense: "$1.33",
      transactions: [
        "63bf7ccef03239554c00244d",
        "63bf7ccef03239e002001606",
        "63bf7ccef03239eb9d0016d6",
        "63bf7ccef03239966c00169e",
      ],
    },
    {
      _id: "63bf7ac9f032396a8e00168e",
      price: "$167.45",
      expense: "$9.30",
      transactions: [
        "63bf7ccef0323937a5001693",
        "63bf7ccef03239343e0016a9",
        "63bf7ccef032397b4f001608",
      ],
    },
    {
      _id: "63bf7ac9f032396a8e00168f",
      price: "$50.36",
      expense: "$4.38",
      transactions: ["63bf7ccef032394f5f00243f"],
    },
    {
      _id: "63bf7ac9f032396a8e001690",
      price: "$151.61",
      expense: "$2.27",
      transactions: ["63bf7ccef03239966c001699", "63bf7ccef03239742000169f"],
    },
    {
      _id: "63bf7ac9f032396a8e001691",
      price: "$191.46",
      expense: "$5.60",
      transactions: ["63bf7ccef0323901e600155f"],
    },
    {
      _id: "63bf7ac9f032396a8e001692",
      price: "$131.96",
      expense: "$8.80",
      transactions: [
        "63bf7ccef032397b4f001605",
        "63bf7ccef03239855d001561",
        "63bf7ccef03239eb9d0016d9",
        "63bf7ccef0323901e6001558",
        "63bf7ccef032394f5f002444",
      ],
    },
    {
      _id: "63bf7ac9f032396a8e001693",
      price: "$164.96",
      expense: "$4.16",
      transactions: ["63bf7ccef03239eb9d0016d8"],
    },
    {
      _id: "63bf7ac9f032395ccf00168e",
      price: "$13.57",
      expense: "$5.18",
      transactions: ["63bf7ccef032395ccf001695"],
    },
    {
      _id: "63bf7ac9f032395ccf00168f",
      price: "$177.57",
      expense: "$7.04",
      transactions: ["63bf7ccef0323922d2001698", "63bf7ccef03239855d00155c"],
    },
    {
      _id: "63bf7ac9f032395ccf001690",
      price: "$172.71",
      expense: "$5.73",
      transactions: ["63bf7ccef03239966c00169d"],
    },
    {
      _id: "63bf7ac9f032395ccf001691",
      price: "$17.48",
      expense: "$4.81",
      transactions: ["63bf7ccef0323974200016a0", "63bf7ccef0323937a5001692"],
    },
    {
      _id: "63bf7ac9f032395ccf001692",
      price: "$54.13",
      expense: "$7.44",
      transactions: ["63bf7ccef0323922d2001694", "63bf7ccef03239eb9d0016df"],
    },
    {
      _id: "63bf7ac9f032395ccf001693",
      price: "$155.93",
      expense: "$9.10",
      transactions: [
        "63bf7ccef03239343e0016a7",
        "63bf7ccef032394f5f002440",
        "63bf7ccef03239cf1b0016a9",
        "63bf7ccef032395ccf00169a",
      ],
    },
    {
      _id: "63bf7ac9f032397b4f0015fb",
      price: "$13.34",
      expense: "$6.17",
      transactions: ["63bf7ccef03239cf1b0016a4"],
    },
    {
      _id: "63bf7ac9f032397b4f0015fc",
      price: "$75.89",
      expense: "$1.11",
      transactions: [
        "63bf7ccef03239aec900155f",
        "63bf7ccef03239966c0016a0",
        "63bf7ccef03239cf1b00169f",
        "63bf7ccef032394f5f002440",
      ],
    },
    {
      _id: "63bf7ac9f032397b4f0015fd",
      price: "$153.85",
      expense: "$6.99",
      transactions: [
        "63bf7ccef03239343e0016a3",
        "63bf7ccef0323974200016a3",
        "63bf7ccef0323975d600169c",
        "63bf7ccef03239742000169c",
        "63bf7ccef03239cf1b0016a3",
      ],
    },
    {
      _id: "63bf7ac9f032397b4f0015fe",
      price: "$187.83",
      expense: "$6.66",
      transactions: [
        "63bf7ccef0323937a5001692",
        "63bf7ccef03239aec9001559",
        "63bf7ccef0323922d200169b",
        "63bf7ccef0323922d200169c",
      ],
    },
    {
      _id: "63bf7ac9f032397b4f0015ff",
      price: "$119.33",
      expense: "$1.40",
      transactions: [
        "63bf7ccef032397b4f00160b",
        "63bf7ccef03239eb9d0016ce",
        "63bf7ccef03239eb9d0016d3",
        "63bf7ccef032397b4f001602",
        "63bf7ccef03239cf1b0016a7",
      ],
    },
    {
      _id: "63bf7ac9f032397b4f001600",
      price: "$54.00",
      expense: "$5.61",
      transactions: ["63bf7ccef03239554c002454", "63bf7ccef032394cbd0016a9"],
    },
    {
      _id: "63bf7ac9f0323922d200168e",
      price: "$144.81",
      expense: "$7.45",
      transactions: [
        "63bf7ccef032395ccf00169b",
        "63bf7ccef03239eb9d0016dd",
        "63bf7ccef03239eb9d0016d4",
      ],
    },
    {
      _id: "63bf7ac9f0323922d200168f",
      price: "$37.04",
      expense: "$5.86",
      transactions: ["63bf7ccef0323974200016a5"],
    },
    {
      _id: "63bf7ac9f0323922d2001690",
      price: "$161.03",
      expense: "$4.48",
      transactions: ["63bf7ccef03239966c00169a"],
    },
    {
      _id: "63bf7ac9f0323922d2001691",
      price: "$73.46",
      expense: "$7.95",
      transactions: [
        "63bf7ccef032395ccf001696",
        "63bf7ccef03239eb9d0016de",
        "63bf7ccef03239f92000168f",
        "63bf7ccef032394f5f00243e",
        "63bf7ccef032394cbd0016a5",
      ],
    },
    {
      _id: "63bf7ac9f0323922d2001692",
      price: "$120.96",
      expense: "$8.90",
      transactions: ["63bf7ccef032396a8e00169e", "63bf7ccef032397b4f001603"],
    },
    {
      _id: "63bf7ac9f0323922d2001693",
      price: "$34.46",
      expense: "$9.25",
      transactions: [
        "63bf7ccef032396d89000012",
        "63bf7ccef03239f920001697",
        "63bf7ccef0323937a5001694",
        "63bf7ccef03239855d00155b",
        "63bf7ccef032395ccf001697",
      ],
    },
    {
      _id: "63bf7ac9f032396d89000007",
      price: "$172.27",
      expense: "$3.92",
      transactions: ["63bf7ccef03239554c00244b"],
    },
    {
      _id: "63bf7ac9f032396d89000008",
      price: "$20.54",
      expense: "$8.12",
      transactions: ["63bf7ccef03239855d001558"],
    },
    {
      _id: "63bf7ac9f032396d89000009",
      price: "$80.31",
      expense: "$7.04",
      transactions: [
        "63bf7ccef0323901e6001558",
        "63bf7ccef0323937a5001693",
        "63bf7ccef03239eb9d0016d9",
      ],
    },
    {
      _id: "63bf7ac9f032396d8900000a",
      price: "$77.67",
      expense: "$4.14",
      transactions: ["63bf7ccef03239343e0016ab"],
    },
    {
      _id: "63bf7ac9f032396d8900000b",
      price: "$47.25",
      expense: "$5.53",
      transactions: ["63bf7ccef03239343e0016a8", "63bf7ccef032394f5f00243e"],
    },
    {
      _id: "63bf7ac9f032396d8900000c",
      price: "$181.02",
      expense: "$7.57",
      transactions: [
        "63bf7ccef0323922d2001698",
        "63bf7ccef03239eb9d0016e3",
        "63bf7ccef032396a8e00169c",
        "63bf7ccef032397b4f001608",
        "63bf7ccef032396d89000013",
      ],
    },
    {
      _id: "63bf7ac9f03239f920001689",
      price: "$67.20",
      expense: "$8.37",
      transactions: [
        "63bf7ccef032396a8e00169b",
        "63bf7ccef03239343e0016a2",
        "63bf7ccef03239966c00169d",
        "63bf7ccef0323922d2001698",
        "63bf7ccef03239855d001561",
      ],
    },
    {
      _id: "63bf7ac9f03239f92000168a",
      price: "$58.15",
      expense: "$3.19",
      transactions: ["63bf7ccef03239f920001690"],
    },
    {
      _id: "63bf7ac9f03239f92000168b",
      price: "$145.65",
      expense: "$3.83",
      transactions: ["63bf7ccef032394cbd0016aa"],
    },
    {
      _id: "63bf7ac9f03239f92000168c",
      price: "$134.08",
      expense: "$7.03",
      transactions: [
        "63bf7ccef032396a8e00169a",
        "63bf7ccef032397b4f001604",
        "63bf7ccef03239eb9d0016d1",
        "63bf7ccef03239cf1b0016a7",
        "63bf7ccef03239eb9d0016ea",
      ],
    },
    {
      _id: "63bf7ac9f03239f92000168d",
      price: "$33.79",
      expense: "$4.54",
      transactions: [
        "63bf7ccef032394cbd0016a1",
        "63bf7ccef0323922d200169d",
        "63bf7ccef03239cf1b0016a1",
        "63bf7ccef0323975d60016a3",
        "63bf7ccef03239aec9001557",
      ],
    },
    {
      _id: "63bf7ac9f03239f92000168e",
      price: "$182.10",
      expense: "$9.54",
      transactions: [
        "63bf7ccef032396a8e001698",
        "63bf7ccef0323922d2001699",
        "63bf7ccef03239742000169c",
        "63bf7ccef03239aec900155d",
      ],
    },
    {
      _id: "63bf7ac9f032394f5f002433",
      price: "$129.93",
      expense: "$1.15",
      transactions: [
        "63bf7ccef0323975d600169a",
        "63bf7ccef032397b4f001604",
        "63bf7ccef03239966c001699",
        "63bf7ccef032397b4f001603",
      ],
    },
    {
      _id: "63bf7ac9f032394f5f002434",
      price: "$148.47",
      expense: "$1.63",
      transactions: [
        "63bf7ccef03239554c00244e",
        "63bf7ccef032395ccf00169f",
        "63bf7ccef0323937a500168d",
        "63bf7ccef0323975d60016a1",
      ],
    },
    {
      _id: "63bf7ac9f032394f5f002435",
      price: "$13.52",
      expense: "$9.76",
      transactions: [
        "63bf7ccef03239343e0016a3",
        "63bf7ccef03239966c00169f",
        "63bf7ccef03239cf1b0016a8",
        "63bf7ccef032395ccf00169d",
      ],
    },
    {
      _id: "63bf7ac9f032394f5f002436",
      price: "$120.88",
      expense: "$5.94",
      transactions: [
        "63bf7ccef03239e00200160d",
        "63bf7ccef03239cf1b0016a1",
        "63bf7ccef032396d8900000f",
      ],
    },
    {
      _id: "63bf7ac9f032394f5f002437",
      price: "$153.54",
      expense: "$9.63",
      transactions: ["63bf7ccef03239eb9d0016d0", "63bf7ccef032396d89000010"],
    },
    {
      _id: "63bf7ac9f032394f5f002438",
      price: "$35.74",
      expense: "$8.71",
      transactions: [
        "63bf7ccef0323975d6001698",
        "63bf7ccef03239554c00244c",
        "63bf7ccef03239cf1b0016a0",
        "63bf7ccef032394f5f002442",
        "63bf7ccef03239f92000168f",
      ],
    },
    {
      _id: "63bf7ac9f0323937a5001687",
      price: "$120.21",
      expense: "$5.00",
      transactions: [
        "63bf7ccef03239554c00244a",
        "63bf7ccef032394cbd0016a1",
        "63bf7ccef03239966c00169e",
        "63bf7ccef03239742000169f",
        "63bf7ccef03239eb9d0016e2",
      ],
    },
    {
      _id: "63bf7ac9f0323937a5001688",
      price: "$180.06",
      expense: "$6.39",
      transactions: ["63bf7ccef03239554c002453"],
    },
    {
      _id: "63bf7ac9f0323937a5001689",
      price: "$92.70",
      expense: "$5.53",
      transactions: [
        "63bf7ccef03239343e0016a9",
        "63bf7ccef03239cf1b0016a1",
        "63bf7ccef032397b4f001609",
      ],
    },
    {
      _id: "63bf7ac9f0323937a500168a",
      price: "$35.39",
      expense: "$2.89",
      transactions: [
        "63bf7ccef0323937a5001694",
        "63bf7ccef03239eb9d0016da",
        "63bf7ccef0323937a5001698",
        "63bf7ccef03239eb9d0016e6",
      ],
    },
    {
      _id: "63bf7ac9f0323937a500168b",
      price: "$159.59",
      expense: "$3.54",
      transactions: [
        "63bf7ccef03239eb9d0016d9",
        "63bf7ccef032396a8e001697",
        "63bf7ccef032394cbd0016aa",
        "63bf7ccef03239f920001693",
      ],
    },
    {
      _id: "63bf7ac9f0323937a500168c",
      price: "$116.66",
      expense: "$5.60",
      transactions: [
        "63bf7ccef03239aec900155a",
        "63bf7ccef032394cbd0016a2",
        "63bf7ccef032396a8e001694",
        "63bf7ccef0323975d60016a0",
      ],
    },
    {
      _id: "63bf7ac9f03239855d001551",
      price: "$19.66",
      expense: "$6.43",
      transactions: [
        "63bf7ccef03239eb9d0016d0",
        "63bf7ccef03239554c00244e",
        "63bf7ccef0323922d2001697",
      ],
    },
    {
      _id: "63bf7ac9f03239855d001552",
      price: "$99.78",
      expense: "$7.03",
      transactions: [
        "63bf7ccef03239eb9d0016cd",
        "63bf7ccef032395ccf001697",
        "63bf7ccef03239855d001558",
        "63bf7ccef03239966c00169c",
        "63bf7ccef0323922d2001696",
      ],
    },
    {
      _id: "63bf7ac9f03239855d001553",
      price: "$145.56",
      expense: "$9.40",
      transactions: ["63bf7ccef0323922d2001694"],
    },
    {
      _id: "63bf7ac9f03239855d001554",
      price: "$133.65",
      expense: "$1.03",
      transactions: [
        "63bf7ccef0323937a5001690",
        "63bf7ccef03239f920001696",
        "63bf7ccef0323901e600155e",
        "63bf7ccef032396d89000018",
        "63bf7ccef0323901e6001560",
      ],
    },
    {
      _id: "63bf7ac9f03239855d001555",
      price: "$174.42",
      expense: "$5.30",
      transactions: ["63bf7ccef03239aec9001558"],
    },
    {
      _id: "63bf7ac9f03239855d001556",
      price: "$77.55",
      expense: "$1.01",
      transactions: ["63bf7ccef03239e002001607"],
    },
    {
      _id: "63bf7ac9f03239eb9d0016c3",
      price: "$103.01",
      expense: "$6.81",
      transactions: [
        "63bf7ccef03239966c001699",
        "63bf7ccef03239554c00244e",
        "63bf7ccef03239eb9d0016cd",
        "63bf7ccef03239cf1b0016a8",
        "63bf7ccef032394f5f00243b",
      ],
    },
    {
      _id: "63bf7ac9f03239eb9d0016c4",
      price: "$88.02",
      expense: "$8.00",
      transactions: ["63bf7ccef0323901e600155f", "63bf7ccef03239eb9d0016e6"],
    },
    {
      _id: "63bf7ac9f03239eb9d0016c5",
      price: "$119.84",
      expense: "$8.95",
      transactions: ["63bf7ccef032395ccf001695", "63bf7ccef03239f920001695"],
    },
    {
      _id: "63bf7ac9f03239eb9d0016c6",
      price: "$18.02",
      expense: "$5.48",
      transactions: [
        "63bf7ccef03239e00200160b",
        "63bf7ccef032395ccf00169a",
        "63bf7ccef03239aec9001560",
        "63bf7ccef0323901e600155e",
        "63bf7ccef03239343e0016a9",
      ],
    },
    {
      _id: "63bf7ac9f03239eb9d0016c7",
      price: "$121.59",
      expense: "$7.27",
      transactions: [
        "63bf7ccef0323975d600169b",
        "63bf7ccef032396a8e00169d",
        "63bf7ccef03239eb9d0016d5",
        "63bf7ccef03239e00200160e",
      ],
    },
    {
      _id: "63bf7ac9f03239eb9d0016c8",
      price: "$42.71",
      expense: "$7.26",
      transactions: ["63bf7ccef032396a8e001696", "63bf7ccef032397b4f001608"],
    },
    {
      _id: "63bf7ac9f03239eb9d0016c9",
      price: "$106.89",
      expense: "$2.49",
      transactions: ["63bf7ccef03239966c00169d"],
    },
    {
      _id: "63bf7ac9f03239eb9d0016ca",
      price: "$162.96",
      expense: "$2.18",
      transactions: [
        "63bf7ccef03239f920001691",
        "63bf7ccef0323937a5001693",
        "63bf7ccef03239f920001694",
        "63bf7ccef0323901e600155b",
      ],
    },
    {
      _id: "63bf7ac9f03239eb9d0016cb",
      price: "$102.90",
      expense: "$1.40",
      transactions: [
        "63bf7ccef03239966c00169f",
        "63bf7ccef032394cbd0016a6",
        "63bf7ccef032395ccf00169d",
        "63bf7ccef032395ccf00169e",
        "63bf7ccef032396a8e001697",
      ],
    },
    {
      _id: "63bf7ac9f03239eb9d0016cc",
      price: "$21.98",
      expense: "$7.86",
      transactions: [
        "63bf7ccef03239343e0016a3",
        "63bf7ccef032397b4f001606",
        "63bf7ccef0323901e6001559",
      ],
    },
  ];


  //temporary interface (this does not occure right after db get)
  interface Kpi {
    monthlyData: {
      month: string;
      revenue: string;
      expenses: string;
      operationalExpenses: string;
      nonOperationalExpenses: string;
    }[];
  }
  const kpi: Kpi[] = [
    {
      _id: "63bf8239f03239e002001612",
      totalProfit: "$212000.00",
      totalRevenue: "$283000.00",
      totalExpenses: "$71000.00",
      monthlyData: [
        {
          month: "january",
          revenue: "$15989.64",
          expenses: "$14231.73",
          operationalExpenses: "$10340.03",
          nonOperationalExpenses: "$4891.70",
        },
        {
          month: "february",
          revenue: "$15832.77",
          expenses: "$11677.84",
          operationalExpenses: "$7006.69",
          nonOperationalExpenses: "$8661.15",
        },
        {
          month: "march",
          revenue: "$16481.27",
          expenses: "$14664.03",
          operationalExpenses: "$8797.42",
          nonOperationalExpenses: "$7866.61",
        },
        {
          month: "april",
          revenue: "$18229.38",
          expenses: "$12336.52",
          operationalExpenses: "$7401.91",
          nonOperationalExpenses: "$2934.61",
        },
        {
          month: "may",
          revenue: "$17401.79",
          expenses: "$11160.61",
          operationalExpenses: "$4296.37",
          nonOperationalExpenses: "$4864.24",
        },
        {
          month: "june",
          revenue: "$18274.03",
          expenses: "$12311.61",
          operationalExpenses: "$7386.96",
          nonOperationalExpenses: "$9924.65",
        },
        {
          month: "july",
          revenue: "$19349.98",
          expenses: "$15431.81",
          operationalExpenses: "$9258.09",
          nonOperationalExpenses: "$7173.72",
        },
        {
          month: "august",
          revenue: "$16647.29",
          expenses: "$13213.71",
          operationalExpenses: "$3127.82",
          nonOperationalExpenses: "$5085.89",
        },
        {
          month: "september",
          revenue: "$19344.07",
          expenses: "$17405.92",
          operationalExpenses: "$10443.55",
          nonOperationalExpenses: "$4962.37",
        },
        {
          month: "october",
          revenue: "$21160.22",
          expenses: "$12990.58",
          operationalExpenses: "$3594.35",
          nonOperationalExpenses: "$9396.23",
        },
        {
          month: "november",
          revenue: "$22655.03",
          expenses: "$17140.80",
          operationalExpenses: "$10284.48",
          nonOperationalExpenses: "$3856.32",
        },
        {
          month: "december",
          revenue: "$17757.75",
          expenses: "$15266.97",
          operationalExpenses: "$9160.18",
          nonOperationalExpenses: "$4106.79",
        },
      ],
      dailyData: [
        { date: "2022-01-02", revenue: "$1498.94", expenses: "$430.64" },
        { date: "2022-01-03", revenue: "$935.08", expenses: "$329.32" },
        { date: "2022-01-04", revenue: "$1350.96", expenses: "$562.49" },
        { date: "2022-01-05", revenue: "$1244.33", expenses: "$679.32" },
        { date: "2022-01-06", revenue: "$1132.99", expenses: "$439.80" },
        { date: "2022-01-07", revenue: "$1158.31", expenses: "$336.12" },
        { date: "2022-01-08", revenue: "$1184.66", expenses: "$516.10" },
        { date: "2022-01-09", revenue: "$637.32", expenses: "$635.06" },
        { date: "2022-01-10", revenue: "$1315.21", expenses: "$560.12" },
        { date: "2022-01-11", revenue: "$1093.06", expenses: "$540.05" },
        { date: "2022-01-12", revenue: "$1477.77", expenses: "$487.16" },
        { date: "2022-01-13", revenue: "$1076.09", expenses: "$616.29" },
        { date: "2022-01-14", revenue: "$1130.96", expenses: "$392.17" },
        { date: "2022-01-15", revenue: "$846.42", expenses: "$548.38" },
        { date: "2022-01-16", revenue: "$1182.35", expenses: "$366.72" },
        { date: "2022-01-17", revenue: "$1046.61", expenses: "$481.56" },
        { date: "2022-01-18", revenue: "$601.65", expenses: "$452.75" },
        { date: "2022-01-19", revenue: "$798.33", expenses: "$351.23" },
        { date: "2022-01-20", revenue: "$1499.37", expenses: "$340.85" },
        { date: "2022-01-21", revenue: "$1462.26", expenses: "$630.31" },
        { date: "2022-01-22", revenue: "$1447.38", expenses: "$476.59" },
        { date: "2022-01-23", revenue: "$1194.96", expenses: "$482.85" },
        { date: "2022-01-24", revenue: "$713.11", expenses: "$754.33" },
        { date: "2022-01-25", revenue: "$1084.48", expenses: "$547.37" },
        { date: "2022-01-26", revenue: "$819.53", expenses: "$653.59" },
        { date: "2022-01-27", revenue: "$1306.61", expenses: "$636.87" },
        { date: "2022-01-28", revenue: "$1029.78", expenses: "$719.46" },
        { date: "2022-01-29", revenue: "$1415.18", expenses: "$387.49" },
        { date: "2022-01-30", revenue: "$845.38", expenses: "$533.93" },
        { date: "2022-01-31", revenue: "$764.69", expenses: "$762.35" },
        { date: "2022-02-01", revenue: "$616.49", expenses: "$658.92" },
        { date: "2022-02-02", revenue: "$677.71", expenses: "$754.69" },
        { date: "2022-02-03", revenue: "$576.99", expenses: "$395.43" },
        { date: "2022-02-04", revenue: "$713.58", expenses: "$733.27" },
        { date: "2022-02-05", revenue: "$714.18", expenses: "$336.24" },
        { date: "2022-02-06", revenue: "$807.64", expenses: "$534.49" },
        { date: "2022-02-07", revenue: "$824.40", expenses: "$743.82" },
        { date: "2022-02-08", revenue: "$975.30", expenses: "$307.51" },
        { date: "2022-02-09", revenue: "$1098.58", expenses: "$615.31" },
        { date: "2022-02-10", revenue: "$1119.34", expenses: "$677.04" },
        { date: "2022-02-11", revenue: "$1232.39", expenses: "$664.69" },
        { date: "2022-02-12", revenue: "$1405.21", expenses: "$422.57" },
        { date: "2022-02-13", revenue: "$1343.47", expenses: "$350.77" },
        { date: "2022-02-14", revenue: "$1495.81", expenses: "$301.39" },
        { date: "2022-02-15", revenue: "$1131.97", expenses: "$597.06" },
        { date: "2022-02-16", revenue: "$1174.17", expenses: "$685.08" },
        { date: "2022-02-17", revenue: "$702.38", expenses: "$671.23" },
        { date: "2022-02-18", revenue: "$1440.95", expenses: "$539.55" },
        { date: "2022-02-19", revenue: "$1272.87", expenses: "$703.02" },
        { date: "2022-02-20", revenue: "$530.16", expenses: "$305.75" },
        { date: "2022-02-21", revenue: "$552.26", expenses: "$556.19" },
        { date: "2022-02-22", revenue: "$1456.57", expenses: "$675.05" },
        { date: "2022-02-23", revenue: "$512.04", expenses: "$576.37" },
        { date: "2022-02-24", revenue: "$886.31", expenses: "$410.14" },
        { date: "2022-02-25", revenue: "$1254.55", expenses: "$321.41" },
        { date: "2022-02-26", revenue: "$1123.03", expenses: "$480.50" },
        { date: "2022-02-27", revenue: "$671.45", expenses: "$494.61" },
        { date: "2022-02-28", revenue: "$1373.22", expenses: "$312.67" },
        { date: "2022-03-01", revenue: "$896.75", expenses: "$696.92" },
        { date: "2022-03-02", revenue: "$721.53", expenses: "$505.34" },
        { date: "2022-03-03", revenue: "$560.48", expenses: "$541.09" },
        { date: "2022-03-04", revenue: "$1065.40", expenses: "$733.90" },
        { date: "2022-03-05", revenue: "$692.26", expenses: "$462.62" },
        { date: "2022-03-06", revenue: "$832.86", expenses: "$642.28" },
        { date: "2022-03-07", revenue: "$709.00", expenses: "$742.25" },
        { date: "2022-03-08", revenue: "$1442.66", expenses: "$596.24" },
        { date: "2022-03-09", revenue: "$542.74", expenses: "$655.54" },
        { date: "2022-03-10", revenue: "$526.11", expenses: "$530.28" },
        { date: "2022-03-11", revenue: "$658.47", expenses: "$352.21" },
        { date: "2022-03-12", revenue: "$996.34", expenses: "$749.20" },
        { date: "2022-03-13", revenue: "$770.93", expenses: "$516.91" },
        { date: "2022-03-14", revenue: "$617.37", expenses: "$758.07" },
        { date: "2022-03-15", revenue: "$786.48", expenses: "$451.41" },
        { date: "2022-03-16", revenue: "$540.91", expenses: "$756.89" },
        { date: "2022-03-17", revenue: "$919.24", expenses: "$701.41" },
        { date: "2022-03-18", revenue: "$909.23", expenses: "$638.37" },
        { date: "2022-03-19", revenue: "$546.92", expenses: "$465.94" },
        { date: "2022-03-20", revenue: "$1233.13", expenses: "$441.79" },
        { date: "2022-03-21", revenue: "$1494.34", expenses: "$333.61" },
        { date: "2022-03-22", revenue: "$610.14", expenses: "$565.13" },
        { date: "2022-03-23", revenue: "$1044.45", expenses: "$704.07" },
        { date: "2022-03-24", revenue: "$790.03", expenses: "$393.17" },
        { date: "2022-03-25", revenue: "$915.05", expenses: "$709.24" },
        { date: "2022-03-26", revenue: "$620.99", expenses: "$309.02" },
        { date: "2022-03-27", revenue: "$1404.61", expenses: "$649.14" },
        { date: "2022-03-28", revenue: "$727.52", expenses: "$580.27" },
        { date: "2022-03-29", revenue: "$618.69", expenses: "$503.99" },
        { date: "2022-03-30", revenue: "$806.00", expenses: "$545.37" },
        { date: "2022-03-31", revenue: "$629.04", expenses: "$449.41" },
        { date: "2022-04-01", revenue: "$1197.71", expenses: "$524.89" },
        { date: "2022-04-02", revenue: "$1347.49", expenses: "$779.95" },
        { date: "2022-04-03", revenue: "$845.73", expenses: "$373.66" },
        { date: "2022-04-04", revenue: "$701.97", expenses: "$424.72" },
        { date: "2022-04-05", revenue: "$699.12", expenses: "$652.28" },
        { date: "2022-04-06", revenue: "$1487.15", expenses: "$527.12" },
        { date: "2022-04-07", revenue: "$770.93", expenses: "$455.04" },
        { date: "2022-04-08", revenue: "$823.81", expenses: "$686.44" },
        { date: "2022-04-09", revenue: "$1190.89", expenses: "$501.52" },
        { date: "2022-04-10", revenue: "$667.10", expenses: "$792.51" },
        { date: "2022-04-11", revenue: "$712.50", expenses: "$325.40" },
        { date: "2022-04-12", revenue: "$1113.94", expenses: "$610.37" },
        { date: "2022-04-13", revenue: "$755.04", expenses: "$413.31" },
        { date: "2022-04-14", revenue: "$903.46", expenses: "$592.64" },
        { date: "2022-04-15", revenue: "$668.47", expenses: "$439.13" },
        { date: "2022-04-16", revenue: "$1053.55", expenses: "$723.14" },
        { date: "2022-04-17", revenue: "$574.82", expenses: "$627.62" },
        { date: "2022-04-18", revenue: "$732.19", expenses: "$545.84" },
        { date: "2022-04-19", revenue: "$1214.28", expenses: "$585.94" },
        { date: "2022-04-20", revenue: "$844.63", expenses: "$668.86" },
        { date: "2022-04-21", revenue: "$545.95", expenses: "$450.46" },
        { date: "2022-04-22", revenue: "$925.01", expenses: "$588.16" },
        { date: "2022-04-23", revenue: "$840.44", expenses: "$324.07" },
        { date: "2022-04-24", revenue: "$799.81", expenses: "$320.28" },
        { date: "2022-04-25", revenue: "$1108.47", expenses: "$330.84" },
        { date: "2022-04-26", revenue: "$572.72", expenses: "$605.23" },
        { date: "2022-04-27", revenue: "$1416.82", expenses: "$746.86" },
        { date: "2022-04-28", revenue: "$1344.54", expenses: "$448.10" },
        { date: "2022-04-29", revenue: "$957.31", expenses: "$653.00" },
        { date: "2022-04-30", revenue: "$1042.75", expenses: "$686.48" },
        { date: "2022-05-01", revenue: "$614.52", expenses: "$399.34" },
        { date: "2022-05-02", revenue: "$968.08", expenses: "$490.92" },
        { date: "2022-05-03", revenue: "$818.17", expenses: "$666.67" },
        { date: "2022-05-04", revenue: "$787.90", expenses: "$641.50" },
        { date: "2022-05-05", revenue: "$887.20", expenses: "$456.85" },
        { date: "2022-05-06", revenue: "$926.64", expenses: "$595.10" },
        { date: "2022-05-07", revenue: "$667.62", expenses: "$652.33" },
        { date: "2022-05-08", revenue: "$1450.41", expenses: "$660.60" },
        { date: "2022-05-09", revenue: "$1009.90", expenses: "$479.36" },
        { date: "2022-05-10", revenue: "$547.53", expenses: "$554.87" },
        { date: "2022-05-11", revenue: "$579.74", expenses: "$432.36" },
        { date: "2022-05-12", revenue: "$597.11", expenses: "$411.56" },
        { date: "2022-05-13", revenue: "$1300.97", expenses: "$654.18" },
        { date: "2022-05-14", revenue: "$1042.83", expenses: "$715.01" },
        { date: "2022-05-15", revenue: "$1345.61", expenses: "$334.37" },
        { date: "2022-05-16", revenue: "$768.61", expenses: "$425.22" },
        { date: "2022-05-17", revenue: "$1175.15", expenses: "$729.16" },
        { date: "2022-05-18", revenue: "$767.39", expenses: "$779.83" },
        { date: "2022-05-19", revenue: "$969.34", expenses: "$341.02" },
        { date: "2022-05-20", revenue: "$993.34", expenses: "$530.27" },
        { date: "2022-05-21", revenue: "$968.98", expenses: "$597.76" },
        { date: "2022-05-22", revenue: "$628.01", expenses: "$574.00" },
        { date: "2022-05-23", revenue: "$842.68", expenses: "$402.90" },
        { date: "2022-05-24", revenue: "$986.72", expenses: "$365.50" },
        { date: "2022-05-25", revenue: "$1321.66", expenses: "$536.73" },
        { date: "2022-05-26", revenue: "$806.21", expenses: "$499.02" },
        { date: "2022-05-27", revenue: "$886.34", expenses: "$776.51" },
        { date: "2022-05-28", revenue: "$663.62", expenses: "$718.90" },
        { date: "2022-05-29", revenue: "$546.73", expenses: "$729.32" },
        { date: "2022-05-30", revenue: "$1284.65", expenses: "$355.50" },
        { date: "2022-05-31", revenue: "$1422.81", expenses: "$776.55" },
        { date: "2022-06-01", revenue: "$678.50", expenses: "$767.03" },
        { date: "2022-06-02", revenue: "$867.65", expenses: "$581.76" },
        { date: "2022-06-03", revenue: "$674.84", expenses: "$666.78" },
        { date: "2022-06-04", revenue: "$595.25", expenses: "$354.79" },
        { date: "2022-06-05", revenue: "$1262.15", expenses: "$588.65" },
        { date: "2022-06-06", revenue: "$1286.75", expenses: "$403.69" },
        { date: "2022-06-07", revenue: "$731.00", expenses: "$532.55" },
        { date: "2022-06-08", revenue: "$1096.82", expenses: "$328.76" },
        { date: "2022-06-09", revenue: "$1113.24", expenses: "$749.16" },
        { date: "2022-06-10", revenue: "$1479.08", expenses: "$417.01" },
        { date: "2022-06-11", revenue: "$1023.70", expenses: "$326.53" },
        { date: "2022-06-12", revenue: "$953.94", expenses: "$426.52" },
        { date: "2022-06-13", revenue: "$1154.32", expenses: "$565.70" },
        { date: "2022-06-14", revenue: "$1431.49", expenses: "$398.88" },
        { date: "2022-06-15", revenue: "$1206.06", expenses: "$442.20" },
        { date: "2022-06-16", revenue: "$1441.07", expenses: "$730.36" },
        { date: "2022-06-17", revenue: "$664.42", expenses: "$583.27" },
        { date: "2022-06-18", revenue: "$569.78", expenses: "$556.95" },
        { date: "2022-06-19", revenue: "$619.93", expenses: "$519.31" },
        { date: "2022-06-20", revenue: "$1232.45", expenses: "$410.94" },
        { date: "2022-06-21", revenue: "$1429.32", expenses: "$348.96" },
        { date: "2022-06-22", revenue: "$1304.03", expenses: "$597.34" },
        { date: "2022-06-23", revenue: "$1089.02", expenses: "$576.66" },
        { date: "2022-06-24", revenue: "$740.89", expenses: "$616.74" },
        { date: "2022-06-25", revenue: "$1066.17", expenses: "$656.03" },
        { date: "2022-06-26", revenue: "$1385.65", expenses: "$719.00" },
        { date: "2022-06-27", revenue: "$1498.16", expenses: "$571.97" },
        { date: "2022-06-28", revenue: "$579.61", expenses: "$410.93" },
        { date: "2022-06-29", revenue: "$624.32", expenses: "$526.26" },
        { date: "2022-06-30", revenue: "$798.71", expenses: "$736.02" },
        { date: "2022-07-01", revenue: "$977.14", expenses: "$660.07" },
        { date: "2022-07-02", revenue: "$1257.50", expenses: "$682.12" },
        { date: "2022-07-03", revenue: "$598.53", expenses: "$421.27" },
        { date: "2022-07-04", revenue: "$1178.54", expenses: "$750.49" },
        { date: "2022-07-05", revenue: "$652.35", expenses: "$613.77" },
        { date: "2022-07-06", revenue: "$926.22", expenses: "$693.88" },
        { date: "2022-07-07", revenue: "$1303.57", expenses: "$683.27" },
        { date: "2022-07-08", revenue: "$538.83", expenses: "$703.28" },
        { date: "2022-07-09", revenue: "$805.46", expenses: "$511.35" },
        { date: "2022-07-10", revenue: "$614.23", expenses: "$607.68" },
        { date: "2022-07-11", revenue: "$986.25", expenses: "$590.38" },
        { date: "2022-07-12", revenue: "$1035.61", expenses: "$496.20" },
        { date: "2022-07-13", revenue: "$510.87", expenses: "$310.95" },
        { date: "2022-07-14", revenue: "$1375.38", expenses: "$766.17" },
        { date: "2022-07-15", revenue: "$1298.54", expenses: "$726.07" },
        { date: "2022-07-16", revenue: "$858.92", expenses: "$302.26" },
        { date: "2022-07-17", revenue: "$520.66", expenses: "$611.26" },
        { date: "2022-07-18", revenue: "$794.83", expenses: "$307.78" },
        { date: "2022-07-19", revenue: "$1328.66", expenses: "$439.09" },
        { date: "2022-07-20", revenue: "$1314.81", expenses: "$350.62" },
        { date: "2022-07-21", revenue: "$1281.19", expenses: "$343.02" },
        { date: "2022-07-22", revenue: "$569.59", expenses: "$689.64" },
        { date: "2022-07-23", revenue: "$951.97", expenses: "$638.80" },
        { date: "2022-07-24", revenue: "$1323.68", expenses: "$454.90" },
        { date: "2022-07-25", revenue: "$852.04", expenses: "$645.14" },
        { date: "2022-07-26", revenue: "$1323.45", expenses: "$763.45" },
        { date: "2022-07-27", revenue: "$1091.68", expenses: "$576.46" },
        { date: "2022-07-28", revenue: "$805.31", expenses: "$534.42" },
        { date: "2022-07-29", revenue: "$858.09", expenses: "$547.69" },
        { date: "2022-07-30", revenue: "$720.94", expenses: "$308.57" },
        { date: "2022-07-31", revenue: "$854.13", expenses: "$340.54" },
        { date: "2022-08-01", revenue: "$775.98", expenses: "$493.31" },
        { date: "2022-08-02", revenue: "$1194.06", expenses: "$327.15" },
        { date: "2022-08-03", revenue: "$1463.58", expenses: "$560.15" },
        { date: "2022-08-04", revenue: "$846.65", expenses: "$586.21" },
        { date: "2022-08-05", revenue: "$1347.22", expenses: "$664.95" },
        { date: "2022-08-06", revenue: "$643.63", expenses: "$718.49" },
        { date: "2022-08-07", revenue: "$582.72", expenses: "$339.96" },
        { date: "2022-08-08", revenue: "$1360.65", expenses: "$683.15" },
        { date: "2022-08-09", revenue: "$1284.11", expenses: "$343.74" },
        { date: "2022-08-10", revenue: "$1103.50", expenses: "$614.88" },
        { date: "2022-08-11", revenue: "$528.48", expenses: "$762.16" },
        { date: "2022-08-12", revenue: "$979.69", expenses: "$468.36" },
        { date: "2022-08-13", revenue: "$1457.87", expenses: "$390.97" },
        { date: "2022-08-14", revenue: "$1397.29", expenses: "$761.24" },
        { date: "2022-08-15", revenue: "$802.38", expenses: "$680.88" },
        { date: "2022-08-16", revenue: "$916.44", expenses: "$563.35" },
        { date: "2022-08-17", revenue: "$525.83", expenses: "$622.37" },
        { date: "2022-08-18", revenue: "$1043.48", expenses: "$757.84" },
        { date: "2022-08-19", revenue: "$689.54", expenses: "$593.78" },
        { date: "2022-08-20", revenue: "$1306.55", expenses: "$397.12" },
        { date: "2022-08-21", revenue: "$1414.61", expenses: "$380.05" },
        { date: "2022-08-22", revenue: "$636.09", expenses: "$426.99" },
        { date: "2022-08-23", revenue: "$1128.52", expenses: "$341.34" },
        { date: "2022-08-24", revenue: "$794.05", expenses: "$432.00" },
        { date: "2022-08-25", revenue: "$936.38", expenses: "$416.62" },
        { date: "2022-08-26", revenue: "$1159.46", expenses: "$709.27" },
        { date: "2022-08-27", revenue: "$1457.79", expenses: "$498.26" },
        { date: "2022-08-28", revenue: "$1376.86", expenses: "$581.87" },
        { date: "2022-08-29", revenue: "$830.11", expenses: "$423.40" },
        { date: "2022-08-30", revenue: "$1431.68", expenses: "$471.83" },
        { date: "2022-08-31", revenue: "$720.17", expenses: "$719.55" },
        { date: "2022-09-01", revenue: "$1158.03", expenses: "$570.54" },
        { date: "2022-09-02", revenue: "$1117.39", expenses: "$606.89" },
        { date: "2022-09-03", revenue: "$1367.28", expenses: "$767.69" },
        { date: "2022-09-04", revenue: "$1152.67", expenses: "$435.39" },
        { date: "2022-09-05", revenue: "$530.15", expenses: "$449.32" },
        { date: "2022-09-06", revenue: "$615.71", expenses: "$749.52" },
        { date: "2022-09-07", revenue: "$1057.53", expenses: "$336.59" },
        { date: "2022-09-08", revenue: "$1130.75", expenses: "$485.13" },
        { date: "2022-09-09", revenue: "$1374.56", expenses: "$606.54" },
        { date: "2022-09-10", revenue: "$1086.33", expenses: "$474.42" },
        { date: "2022-09-11", revenue: "$938.13", expenses: "$431.59" },
        { date: "2022-09-12", revenue: "$815.20", expenses: "$765.07" },
        { date: "2022-09-13", revenue: "$1009.19", expenses: "$589.63" },
        { date: "2022-09-14", revenue: "$1247.00", expenses: "$476.95" },
        { date: "2022-09-15", revenue: "$615.12", expenses: "$730.85" },
        { date: "2022-09-16", revenue: "$1025.87", expenses: "$517.46" },
        { date: "2022-09-17", revenue: "$1012.51", expenses: "$316.31" },
        { date: "2022-09-18", revenue: "$1381.92", expenses: "$626.52" },
        { date: "2022-09-19", revenue: "$817.26", expenses: "$360.33" },
        { date: "2022-09-20", revenue: "$642.00", expenses: "$728.13" },
        { date: "2022-09-21", revenue: "$554.87", expenses: "$770.02" },
        { date: "2022-09-22", revenue: "$1494.84", expenses: "$569.33" },
        { date: "2022-09-23", revenue: "$1254.25", expenses: "$390.00" },
        { date: "2022-09-24", revenue: "$749.93", expenses: "$473.59" },
        { date: "2022-09-25", revenue: "$1329.51", expenses: "$361.60" },
        { date: "2022-09-26", revenue: "$1094.98", expenses: "$660.94" },
        { date: "2022-09-27", revenue: "$1170.18", expenses: "$420.90" },
        { date: "2022-09-28", revenue: "$872.36", expenses: "$627.82" },
        { date: "2022-09-29", revenue: "$990.59", expenses: "$405.93" },
        { date: "2022-09-30", revenue: "$831.62", expenses: "$382.83" },
        { date: "2022-10-01", revenue: "$1284.41", expenses: "$736.88" },
        { date: "2022-10-02", revenue: "$1272.95", expenses: "$645.85" },
        { date: "2022-10-03", revenue: "$1492.35", expenses: "$583.82" },
        { date: "2022-10-04", revenue: "$848.46", expenses: "$574.83" },
        { date: "2022-10-05", revenue: "$599.00", expenses: "$781.89" },
        { date: "2022-10-06", revenue: "$976.82", expenses: "$713.21" },
        { date: "2022-10-07", revenue: "$1252.20", expenses: "$438.58" },
        { date: "2022-10-08", revenue: "$577.48", expenses: "$658.74" },
        { date: "2022-10-09", revenue: "$998.48", expenses: "$756.13" },
        { date: "2022-10-10", revenue: "$822.26", expenses: "$525.18" },
        { date: "2022-10-11", revenue: "$566.85", expenses: "$497.54" },
        { date: "2022-10-12", revenue: "$614.44", expenses: "$568.29" },
        { date: "2022-10-13", revenue: "$912.66", expenses: "$646.20" },
        { date: "2022-10-14", revenue: "$1181.90", expenses: "$499.01" },
        { date: "2022-10-15", revenue: "$687.80", expenses: "$509.42" },
        { date: "2022-10-16", revenue: "$1193.87", expenses: "$784.02" },
        { date: "2022-10-17", revenue: "$673.46", expenses: "$713.26" },
        { date: "2022-10-18", revenue: "$1220.92", expenses: "$549.16" },
        { date: "2022-10-19", revenue: "$748.21", expenses: "$745.88" },
        { date: "2022-10-20", revenue: "$1138.51", expenses: "$794.99" },
        { date: "2022-10-21", revenue: "$785.03", expenses: "$713.34" },
        { date: "2022-10-22", revenue: "$1245.45", expenses: "$525.21" },
        { date: "2022-10-23", revenue: "$1451.62", expenses: "$542.40" },
        { date: "2022-10-24", revenue: "$935.08", expenses: "$640.45" },
        { date: "2022-10-25", revenue: "$812.39", expenses: "$349.79" },
        { date: "2022-10-26", revenue: "$1273.79", expenses: "$727.45" },
        { date: "2022-10-27", revenue: "$1231.44", expenses: "$633.77" },
        { date: "2022-10-28", revenue: "$1203.35", expenses: "$497.31" },
        { date: "2022-10-29", revenue: "$702.78", expenses: "$332.65" },
        { date: "2022-10-30", revenue: "$1053.93", expenses: "$420.18" },
        { date: "2022-10-31", revenue: "$1056.37", expenses: "$367.50" },
        { date: "2022-11-01", revenue: "$1038.36", expenses: "$347.48" },
        { date: "2022-11-02", revenue: "$614.72", expenses: "$420.23" },
        { date: "2022-11-03", revenue: "$664.16", expenses: "$651.04" },
        { date: "2022-11-04", revenue: "$1417.08", expenses: "$631.56" },
        { date: "2022-11-05", revenue: "$557.25", expenses: "$667.31" },
        { date: "2022-11-06", revenue: "$634.14", expenses: "$459.52" },
        { date: "2022-11-07", revenue: "$895.09", expenses: "$683.38" },
        { date: "2022-11-08", revenue: "$1365.47", expenses: "$320.44" },
        { date: "2022-11-09", revenue: "$587.71", expenses: "$435.66" },
        { date: "2022-11-10", revenue: "$1439.46", expenses: "$511.32" },
        { date: "2022-11-11", revenue: "$1318.18", expenses: "$689.70" },
        { date: "2022-11-12", revenue: "$774.94", expenses: "$602.80" },
        { date: "2022-11-13", revenue: "$1345.93", expenses: "$418.38" },
        { date: "2022-11-14", revenue: "$934.12", expenses: "$694.30" },
        { date: "2022-11-15", revenue: "$856.11", expenses: "$719.66" },
        { date: "2022-11-16", revenue: "$834.06", expenses: "$472.46" },
        { date: "2022-11-17", revenue: "$862.35", expenses: "$576.89" },
        { date: "2022-11-18", revenue: "$1098.70", expenses: "$378.77" },
        { date: "2022-11-19", revenue: "$1257.86", expenses: "$594.74" },
        { date: "2022-11-20", revenue: "$1020.98", expenses: "$696.09" },
        { date: "2022-11-21", revenue: "$725.09", expenses: "$648.75" },
        { date: "2022-11-22", revenue: "$738.74", expenses: "$481.11" },
        { date: "2022-11-23", revenue: "$661.41", expenses: "$726.44" },
        { date: "2022-11-24", revenue: "$689.55", expenses: "$542.89" },
        { date: "2022-11-25", revenue: "$1451.71", expenses: "$754.48" },
        { date: "2022-11-26", revenue: "$916.67", expenses: "$554.41" },
        { date: "2022-11-27", revenue: "$1474.95", expenses: "$583.52" },
        { date: "2022-11-28", revenue: "$1438.52", expenses: "$533.21" },
        { date: "2022-11-29", revenue: "$531.00", expenses: "$452.18" },
        { date: "2022-11-30", revenue: "$812.71", expenses: "$302.62" },
        { date: "2022-12-01", revenue: "$772.43", expenses: "$641.09" },
        { date: "2022-12-02", revenue: "$1382.87", expenses: "$482.25" },
        { date: "2022-12-03", revenue: "$573.27", expenses: "$572.70" },
        { date: "2022-12-04", revenue: "$644.09", expenses: "$476.26" },
        { date: "2022-12-05", revenue: "$1338.13", expenses: "$513.24" },
        { date: "2022-12-06", revenue: "$841.11", expenses: "$390.83" },
        { date: "2022-12-07", revenue: "$697.51", expenses: "$759.51" },
        { date: "2022-12-08", revenue: "$627.41", expenses: "$685.80" },
        { date: "2022-12-09", revenue: "$1194.34", expenses: "$447.89" },
        { date: "2022-12-10", revenue: "$891.38", expenses: "$384.43" },
        { date: "2022-12-11", revenue: "$642.22", expenses: "$346.45" },
        { date: "2022-12-12", revenue: "$846.17", expenses: "$655.70" },
        { date: "2022-12-13", revenue: "$1162.43", expenses: "$788.19" },
        { date: "2022-12-14", revenue: "$1419.39", expenses: "$422.59" },
        { date: "2022-12-15", revenue: "$1350.41", expenses: "$722.04" },
        { date: "2022-12-16", revenue: "$568.48", expenses: "$651.17" },
        { date: "2022-12-17", revenue: "$586.94", expenses: "$364.81" },
        { date: "2022-12-18", revenue: "$787.93", expenses: "$752.41" },
        { date: "2022-12-19", revenue: "$751.40", expenses: "$303.15" },
        { date: "2022-12-20", revenue: "$511.29", expenses: "$319.61" },
        { date: "2022-12-21", revenue: "$789.03", expenses: "$601.99" },
        { date: "2022-12-22", revenue: "$578.12", expenses: "$379.53" },
        { date: "2022-12-23", revenue: "$1298.60", expenses: "$625.81" },
        { date: "2022-12-24", revenue: "$1308.95", expenses: "$708.39" },
        { date: "2022-12-25", revenue: "$788.83", expenses: "$612.17" },
        { date: "2022-12-26", revenue: "$1393.26", expenses: "$354.50" },
        { date: "2022-12-27", revenue: "$907.86", expenses: "$513.74" },
        { date: "2022-12-28", revenue: "$1049.91", expenses: "$583.10" },
        { date: "2022-12-29", revenue: "$1110.05", expenses: "$387.96" },
        { date: "2022-12-30", revenue: "$1403.44", expenses: "$527.35" },
        { date: "2022-12-31", revenue: "$549.52", expenses: "$577.92" },
        { date: "2023-01-01", revenue: "$832.70", expenses: "$664.41" },
      ],
      expensesByCategory: {
        salaries: "$38000.00",
        supplies: "$13000.00",
        services: "$10000.00",
      },
    },
  ];

  const convertStringToNumber = (thing: string) => {
    return parseFloat(thing.substring(1)).toFixed(2)
  }

  const operationalExpenses = useMemo(() => {
    return(
      kpi &&
      kpi[0].monthlyData.map(({month, operationalExpenses, nonOperationalExpenses}) => {
        return{
          name: month.substring(0, 3),
          "Operational Expenses": parseFloat(convertStringToNumber(operationalExpenses)),
          "Non Operational Expenses": parseFloat(convertStringToNumber(nonOperationalExpenses))
        }
      }
    )
    )}, [kpi])

  const productExpenseData = useMemo(() => {
    return (
      products &&
      products.map(({_id, price, expense}) => {
        return {
          id: _id,
          price: convertStringToNumber(price),
          expense: convertStringToNumber(expense)
        }
      })
    )
  }, [products])

  const pieDataPopulate = useMemo(() => {
    return(
      kpi &&
      kpi[0].monthlyData.map(({operationalExpenses, nonOperationalExpenses}) => {
        pieData[0].value += parseFloat(convertStringToNumber(operationalExpenses))
        pieData[1].value += parseFloat(convertStringToNumber(nonOperationalExpenses))
      })
    )
  }, [pieData])

  pieDataPopulate
  return (
    <>
        <DashboardBox gridArea="d">
          <BoxHeader title="Operational vs Non-Operational expenses"
            subtitle="Looking at the revenue and expenses during a given time period"
            sideText="this is going to be replaced with actual numbers but imagine a constant percentage at the moment"/>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={operationalExpenses}
              margin={{
                top: 20,
                right: 0,
                left: -10,
                bottom: 55,
              }}
            >
              <CartesianGrid vertical={false} stroke={palette.grey[800]}/>
              <XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}}/>
              <YAxis 
                yAxisId="left"
                orientation="left"
                tickLine={false} 
                axisLine={false} 
                style={{fontSize: "10px"}}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                tickLine={false} 
                axisLine={false} 
                style={{fontSize: "10px"}}
              />
              <Tooltip />
              <Line 
                yAxisId="left"
                type="monotone"
                dataKey="Non Operational Expenses"
                stroke={palette.tertiary[500]}
              />
              
              <Line 
                yAxisId="right"
                type="monotone"
                dataKey="Operational Expenses"
                stroke={palette.primary.main}
              />
            </LineChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox gridArea="e">
          <BoxHeader title="Campaigns and Targets" sideText="4%" subtitle="something goes here"/>
          <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
            <PieChart 
            width={110} 
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
            >
              <Pie
                stroke="none"
                data={pieData}
                innerRadius={18}
                outerRadius={38}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell 
                  key={`cell-${index}`} 
                  fill={pieColors[index]}
                />
                ))}
              </Pie>
            </PieChart>
            <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
              <Typography variant="h5">
                Target Sales
              </Typography>
              <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
                {/*This number can and will be adjusted to be inserted by the user, in this case business in use */}
                83
              </Typography>
              <Typography variant="h6">
                Finance goals of the cmapagn that is desired
              </Typography>
            </Box>
            <Box flexBasis="40%">
              <Typography variant="h5">
                Losses in Revenue
              </Typography>
              <Typography variant="h6">
                {/*from information, have a terniary with text that details information in text form*/}
                Losses are down something something 25%
              </Typography>
              <Typography mt="0.4rem" variant="h5">
                Profit Margins
              </Typography>
              <Typography variant="h6">
                 {/*again this is attained from information given*/}
                Margins are up by 30% last month
              </Typography>
            </Box>
          </FlexBetween>
        </DashboardBox>
        <DashboardBox gridArea="f">
        <BoxHeader title="Product Prices vs Expenses" sideText="4%" subtitle="something goes here"/>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
          <CartesianGrid stroke={palette.grey[800]}/>
          <XAxis 
            type="number" 
            dataKey="price" 
            name="price" 
            axisLine={false}
            tickLine={false}
            style={{
              fontSize: "10px"
            }}
            tickFormatter={(v) => `$${v}`}
          />
          <YAxis
            type="number" 
            dataKey="expense" 
            name="expense" 
            axisLine={false}
            tickLine={false}
            style={{
              fontSize: "10px"
            }}
            tickFormatter={(v) => `$${v}`}
          />
          <ZAxis
            type="number"
            range={[20]}
          />
          <Tooltip
            formatter={(v) => `$${v}`}
          />
          <Scatter 
          name="Product Expense Ratio" 
          data={productExpenseData} 
          fill={palette.tertiary[500]} />
        </ScatterChart>
      </ResponsiveContainer>
        </DashboardBox>
    </>
  )
}

export default Row2;