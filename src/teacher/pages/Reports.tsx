import React from 'react'
import Header from '../../components/common/Header'
import Navbar from '../components/contentContainer/Navbar'
import StudentAlert from '../components/contentContainer/StudentAlert'
import ReportTools from '../components/contentContainer/reports/ReportTools'
import StudentReports from '../components/contentContainer/reports/StudentReports'

const Reports = () => {
  return (
    <div>
        <Header title={'کلاس ششم'}/>
        <Navbar/>
        <div className='h-screen bg-backGround-1'>
          <div className='mx-[16px] '>
              <StudentAlert/>
           <div className='flex justify-center items-center gap-[12px] mb-[16px]'>
            <ReportTools title={'همه درس ها'}/>
            <ReportTools title={'همه ابزار ها'}/>
           </div>
           <div className='border-[2px] border-borderColor-1 rounded-[24px] bg-white p-[16px]'>
                <StudentReports/>
                <StudentReports/>
                <StudentReports/>
                
           </div>
          </div>
        </div>
    </div>
  )
}

export default Reports