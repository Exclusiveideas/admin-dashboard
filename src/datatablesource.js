//temp data

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 }, {
        field: "user", headerName: "User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: "230",
    },
    {
        field: "age",
        headerName: "Age",
        width: "100",
    },
    {
        field: "status",
        headerName: "Status",
        width: "160",
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "active",
        email: "isnow@gmail.com",
        age: "35"
    },
    {
        id: 2,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "active",
        email: "isnow@gmail.com",
        age: "35"
    },
    {
        id: 3,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "pending",
        email: "isnow@gmail.com",
        age: "35"
    },
    {
        id: 4,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "active",
        email: "isnow@gmail.com",
        age: "35"
    },
    {
        id: 5,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "passive",
        email: "isnow@gmail.com",
        age: "35"
    },
    {
        id: 6,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "passive",
        email: "isnow@gmail.com",
        age: "35"
    },
    {
        id: 7,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "passive",
        email: "isnow@gmail.com",
        age: "35"
    },
    {
        id: 8,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "passive",
        email: "isnow@gmail.com",
        age: "35"
    },
    {
        id: 9,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "passive",
        email: "isnow@gmail.com",
        age: "35"
    },
    {
        id: 10,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        status: "passive",
        email: "isnow@gmail.com",
        age: "35"
    },
]