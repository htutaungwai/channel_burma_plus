import React from "react";

const QandA = () => {
  return (
    <div className="fixed bottom-5 right-10 z-20">
      <div className="bg-slate-100 min-w-[350px] min-h-[400px] flex flex-col flex-wrap">
        <div className="bg-emerald-200 flx ">header</div>
        <div className=" bg-emerald-100">main</div>
        <div className=" basis-4/12 bg-emerald-200">footer</div>
      </div>
    </div>
  );
};

export default QandA;
