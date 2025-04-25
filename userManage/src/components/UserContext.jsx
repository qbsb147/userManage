import React, { createContext, useContext } from 'react'

const UserContext = React.createContext();

export function UserProvider({children}){
    const user = [{
        index: Date.now(),
        id: "qbsb147",
        name: "최예찬",
        age: 45,
        phone: "010-6640-8822",
        address: "서울특별시 알파남구",
        info: "개잘생긴 초럭키비키청년",
        image: "/src/images/직원1.png",
    },{
        index: Date.now(),  // 고유 index 값은 시간이 다르므로 변경
        id: "aqvb512",
        name: "김민수",
        age: 30,
        phone: "010-1234-5678",
        address: "서울특별시 베타구",
        info: "항상 활기찬 민수",
        image: "/src/images/직원2.png",
    }]

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext);
}