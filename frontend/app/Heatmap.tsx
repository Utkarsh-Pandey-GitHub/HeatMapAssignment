import React from 'react';

interface HeatmapProps {
  data: { id: number; subject: string; marks: number }[];
}

const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
  // Extracting only the 'marks' values for the heatmap
  const marksData = data?.map(item => item.marks);

  
  const mapValueToColor = (value: number) => {
    const hue = (1 - value / 100) * 240; 
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div className="heatmap grid sm:grid-cols-5 grid-cols-3 w-fit m-auto h-4/5 font-bold ">
      {data.map((obj, index) => (
        <div key={index} className="cell flex p-5 hover:relative hover:scale-125" style={{ backgroundColor: mapValueToColor(obj.marks) }} >
          <div >

          {obj.subject}
          </div>
          <div>

          {obj.marks}
          </div>
        </div>
      ))}
    </div>
  );
};

export const fnFetch = (async () => {
    
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();
  
    return {
      props: { data },
    };
  })()


export default Heatmap;
