import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <button className="bg-slate-400 p-20 text-2xl font-bold rounded-2xl m-10 hover:shadow-2xl">
            BUY
          </button>
        </div>
        <div>
          <button className="bg-slate-400 p-20 text-2xl font-bold rounded-2xl m-10 hover:shadow-2xl">
            SELL
          </button>
        </div>
      </div>
      <div className="transactions container font-bold text-2xl text-white py-10 ">
        Transition History
        <div className="flex justify-center p-3 text-2xl font-bold"><hr className="w-1/2"></hr></div>
        
      </div>
    </div>
  )
}

export default Dashboard
