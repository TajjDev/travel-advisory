import React from 'react'
import { CardCon } from './PackageCollection'
import PackageCard from './PackageCard'


const PackageMap = () => {
    return (
        <>
            {CardCon.map((packageMap) => (
                    <PackageCard
                        key={packageMap.index}
                        img={packageMap.image}
                        days={packageMap.days}
                        amount={packageMap.amount}
                        know={packageMap.know}
                        location={packageMap.location}
                    />
                ))}
        </>
    )
}





export default PackageMap