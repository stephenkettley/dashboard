type Order = {
    id: string,
    litres: string,
    date: string,
    status: string
}

const orderItems: Order[] = [
    {
        id: "571",
        litres: "500L",
        date: "22 January 2022",
        status: "In Progress"
    },
    {
        id: "572",
        litres: "500L",
        date: "23 January 2022",
        status: "Done"
    },
    
    {
        id: "573",
        litres: "500L",
        date: "24 January 2022",
        status: "Not Started"
    },
    {
        id: "574",
        litres: "500L",
        date: "25 January 2022",
        status: "Done"
    },
    {
        id: "575",
        litres: "500L",
        date: "26 January 2022",
        status: "Done"
    }
]

export default orderItems;