import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { alertError } from "../apis/swal";
import { getStatistics } from "../store/actions";

export default function Statistics() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getStatistics())
      .then((result) => {
        result.forEach((element) => {
          element.totalPost = Number(element.totalPost);
        });
        console.log(result);
        setStatistics(result);
        setIsLoading(false);
      })
      .catch((err) => {
        alertError(err);
      });
  }, []);

  if (isLoading) {
    return <section id="Statistics"></section>;
  }

  return (
    <section id="Statistics" className="page">
      <div className="wrapper py-3 px-4 ">
        <h3>Post / User</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statistics}
              dataKey="totalPost"
              nameKey="author"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#7db7b4"
              label
              labelLine
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
