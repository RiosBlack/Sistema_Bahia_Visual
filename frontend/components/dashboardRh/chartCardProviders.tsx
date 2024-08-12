'use client'
import { PrestadoresContext } from "@/context/providersContext";
import { Card, CardBody, CardHeader, Tooltip } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import { Spinner } from "@nextui-org/react";

export default function ChartCardProviders() {
  const { allProviders, getAllProviders } = useContext(PrestadoresContext);
  const functionProvidersList = [
    { functionProviders: "SERRALHEIRO" },
    { functionProviders: "TESTE" },
  ];

  interface dataType {
    NAME: string;
    QUANTIDADE: number;
  }

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<dataType[]>();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        await getAllProviders();
        if (allProviders) {
          const occurrences = countFunctionProvidersOccurrences(allProviders, functionProvidersList);
          const dataNew: dataType[] = [];
          occurrences?.forEach((value, key) => {
            dataNew.push({
              NAME: key,
              QUANTIDADE: value,
            });
            console.log("passou aqui");
          });
          setData(dataNew);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  function countFunctionProvidersOccurrences(allProviders: any, functionProvidersList: any) {
    if (!allProviders) return;

    const counts = new Map();

    for (const provider of functionProvidersList) {
      counts.set(provider.functionProviders, 0);
    }

    for (const item of allProviders) {
      for (const provider of functionProvidersList) {
        if (item.functionsProviders.functionProviders === provider.functionProviders) {
          const currentCount = counts.get(provider.functionProviders);
          counts.set(provider.functionProviders, currentCount + 1);
          break;
        }
      }
    }

    return counts;
  }

  return (
    <>
      <Card>
        <CardHeader>
          Grafico de prestadores cadastrados por função.
        </CardHeader>
        <CardBody className="flex justify-center items-center">
          {isLoading ? (
            <Spinner size="md" />
          ) :
            <BarChart width={730} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="NAME" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="QUANTIDADE" fill="#EA580C" />
            </BarChart>
          }
        </CardBody>
      </Card>
    </>
  );
}
