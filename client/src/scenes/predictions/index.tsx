import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery } from "@/state/api";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import regression, { DataPoint } from "regression";

const Predictions = () => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  //const { data: kpiData } = useGetKpisQuery();

  interface Kpi {
    _id: string;
    totalProfit: string;
    totalRevenue: string;
    totalExpenses: string;
    monthlyData: {
      month: string;
      revenue: string;
      expenses: string;
      operationalExpenses: string;
      nonOperationalExpenses: string;
    }[];
    dailyData: {
      date: string;
      revenue: string;
      expenses: string;
    }[];
    expensesByCategory: {
      salaries: string;
      supplies: string;
      services: string;
    };
  }

  const kpiData: Kpi[] = [
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

  const convertStringToNumber = (thing: string): number => {
    return parseFloat(thing.substring(1)).toFixed(2)
  }



  const formattedData = useMemo(() => {
    if (!kpiData) return [];
    const monthData = kpiData[0].monthlyData;

    const formatted: Array<DataPoint> = monthData.map(
      ({ revenue }, i: number) => {
        return [i, convertStringToNumber(revenue)];
      }
    );
    const regressionLine = regression.linear(formatted);

    return monthData.map(({ month, revenue }, i: number) => {
      return {
        name: month,
        "Actual Revenue": convertStringToNumber(revenue),
        "Regression Line": regressionLine.points[i][1],
        "Predicted Revenue": regressionLine.predict(i + 12)[1],
      };
    });
  }, [kpiData]);

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            charted revenue and predicted revenue based on a simple linear
            regression model
          </Typography>
        </Box>
        <Button
          onClick={() => setIsPredictions(!isPredictions)}
          sx={{
            color: palette.grey[900],
            backgroundColor: palette.grey[700],
            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
          }}
        >
          Show Predicted Revenue for Next Year
        </Button>
      </FlexBetween>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            top: 20,
            right: 75,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
            <Label value="Month" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            domain={[12000, 26000]}
            axisLine={{ strokeWidth: "0" }}
            style={{ fontSize: "10px" }}
            tickFormatter={(v) => `$${v}`}
          >
            <Label
              value="Revenue in USD"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Actual Revenue"
            stroke={palette.primary.main}
            strokeWidth={0}
            dot={{ strokeWidth: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Regression Line"
            stroke="#8884d8"
            dot={false}
          />
          {isPredictions && (
            <Line
              strokeDasharray="5 5"
              dataKey="Predicted Revenue"
              stroke={palette.secondary[500]}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Predictions;