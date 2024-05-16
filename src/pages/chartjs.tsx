
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";

interface DashboardData {
    date: string;
    total_sales: number;
}

interface ProductData {
    name: string;
    sales_product: number;
}

export default function LineAndBar() {
    const [lineChartData, setLineChartData] = useState<{ labels: string[]; values: number[] }>({ labels: [], values: [] });
    const [barChartData, setBarChartData] = useState<{ labels: string[]; values: number[] }>({ labels: [], values: [] });

    const lineChartRef = useRef<any>();
    const barChartRef = useRef<any>();

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const apiUrl = "http://127.0.0.1:8000/dashboard";

                const response = await axios.get<{
                    sales_data: DashboardData[];
                    salesproduct_data: ProductData[];
                }>(apiUrl);

                const { sales_data, salesproduct_data } = response.data;

                const lineLabels = sales_data.map((item) => item.date);
                const lineValues = sales_data.map((item) => item.total_sales);

                const barLabels = salesproduct_data.map((item) => item.name);
                const barValues = salesproduct_data.map((item) => item.sales_product);

                setLineChartData({
                    labels: lineLabels,
                    values: lineValues,
                });

                setBarChartData({
                    labels: barLabels,
                    values: barValues,
                });
            } catch (error) {
                console.error("Error fetching dashboard data:", error);

            }
        };

        fetchDashboardData();

        return () => {
            console.log('Cleaning up charts...');
            if (lineChartRef.current) {
                console.log('Destroying line chart...');
                lineChartRef.current.destroy();
            }
            if (barChartRef.current) {
                console.log('Destroying bar chart...');
                barChartRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <ResponsiveContainer width='100%' height='50%'>
                <Line
                    ref={lineChartRef}
                    data={{
                        labels: lineChartData.labels,
                        datasets: [
                            {
                                label: "Total Sales per Day",
                                data: lineChartData.values,
                                fill: false,
                                borderColor: "rgb(75, 192, 192)",
                                tension: 0.1,
                            },
                        ],
                    }}
                />
            </ResponsiveContainer>
            <ResponsiveContainer width='100%' height='50%'>
                <Bar
                    ref={barChartRef}
                    data={{
                        labels: barChartData.labels,
                        datasets: [
                            {
                                label: "Total Sales per Product",
                                data: barChartData.values,
                                backgroundColor: "rgba(75, 192, 192, 0.2)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
                            },
                        ],
                    }}
                />
            </ResponsiveContainer>
        </>
    );
}
