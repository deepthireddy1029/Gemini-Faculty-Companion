import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    RadialLinearScale,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    LineElement,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    RadialLinearScale,
    Tooltip,
    Legend
);


export default ChartJS;
