import React, { useEffect } from 'react'
import { CountUp } from 'countup.js'

function InfoCards() {

    useEffect(() => {
        const options = { duration: 2 }
    
        new CountUp('count1', 6, { ...options, prefix: '0' }).start()
        new CountUp('count2', 238, options).start()
    
        // Start count3 at 1395 and increase by 1 every second
        let count = 1395
        const count3 = new CountUp('count3', count, options)
        count3.start()
    
        const interval = setInterval(() => {
            count++
            count3.update(count)
        }, 1000)
    
        return () => clearInterval(interval)
    }, [])
    

    return (
        <section className="container border-bottom mb-8 mb-lg-10">
            <div className="row pb-6 pb-lg-8 g-3 g-lg-8 px-3">
                <div className="col-12 col-md-4">
                    <h2 className="fs-3 fw-bold lh-sm mb-2 text-center" id='count1'>0</h2>
                    <h6 className="fs-8 fw-normal lh-lg mb-0 opacity-70 text-center">Offices are available on different countries</h6>
                </div>
                <div className="col-12 col-md-4">
                    <h2 className="fs-3 fw-bold lh-sm mb-2 text-center" id='count2'>0</h2>
                    <h6 className="opacity-70 fs-8 fw-normal lh-lg mb-0 text-center">Seats are available right now with support</h6>
                </div>
                <div className="col-12 col-md-4">
                    <h2 className="fs-3 fw-bold lh-sm mb-2 text-center" id='count3'>0</h2>
                    <h5 className="opacity-70 fs-8 fw-normal lh-lg mb-0 text-center">People are using our co-work spaces right now</h5>
                </div>
            </div>
        </section>
    )
}

export default InfoCards