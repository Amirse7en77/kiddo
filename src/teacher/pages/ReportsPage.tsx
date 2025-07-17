import React from 'react';
import ReportTools from '../components/contentContainer/reports/ReportTools';
import StudentReports from '../components/contentContainer/reports/StudentReports';

const ReportsPage = () => {
  return (
    <>
      <div className='flex justify-center items-center gap-[12px] mb-[16px]'>
        <ReportTools title={'همه درس ها'} />
        <ReportTools title={'همه ابزار ها'} />
      </div>
      <div className='border-[2px] border-borderColor-1 rounded-[24px] bg-white p-[16px]'>
        <StudentReports />
        <StudentReports />
        <StudentReports />
      </div>
    </>
  );
};

export default ReportsPage;