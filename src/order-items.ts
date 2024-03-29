type Order = {
    id: number,
    litres: string,
    date: string,
    status: string
}

const orderItems: Order[] = [
    {
        id: 500,
        litres: "500L",
        date: "22 January 2022",
        status: "In Progress"
    },
    {
        id: 501,
        litres: "500L",
        date: "23 January 2022",
        status: "Done"
    },
    
    {
        id: 502,
        litres: "500L",
        date: "24 January 2022",
        status: "Not Started"
    },
    {
        id: 502,
        litres: "500L",
        date: "24 January 2022",
        status: "Not Started"
    },
    {
        id: 502,
        litres: "500L",
        date: "24 January 2022",
        status: "Not Started"
    },
   
]

export default orderItems;