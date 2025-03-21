import React from 'react'

const Birthday = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={color} width={28} height={28}>
            <path d="M448 160h-67.4c-10.8-14.7-25.4-25.4-42.1-30.1L301.3 80.8c-1.5-7.9-5-15.2-10.1-21.4C279.8 45.2 261.9 38 243.7 38c-4.3 0-8.7 .5-13 1.5c-22.4 5.2-39.5 24.5-41.8 47.7L135.4 129.9c-16.7 4.7-31.3 15.4-42.1 30.1H26c-14.4 0-26 11.7-26 26.1v39.9c0 6.7 2.5 13 7 17.8c4.5 4.9 10.6 8 17.2 8.7L72 288v176c0 6.6 5.4 12 12 12h344c6.6 0 12-5.4 12-12V288l47.8-15.5c6.6-.7 12.7-3.8 17.2-8.7c4.5-4.9 7-11.1 7-17.8v-39.9c0-14.4-11.7-26.1-26-26.1zM448 276.2l-39.4 12.8c-6.2 2-10.6 7.8-10.6 14.4V448H320V320c0-8.8-7.2-16-16-16s-16 7.2-16 16v128h-96V303.5c0-6.7-4.4-12.4-10.6-14.4L142 276.2V208h306v68.2zM178.8 176c0-22.1 17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40zm174-88c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM243.6 70c0 11-8.9 20-20 20s-20-8.9-20-20s8.9-20 20-20s20 8.9 20 20zm-69 64c0-13.3 10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24zM430 160c-4.4 0-8-3.6-8-8c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8c0 4.4-3.6 8-8 8h-16z"/>
        </svg>
    );
}

export default Birthday;