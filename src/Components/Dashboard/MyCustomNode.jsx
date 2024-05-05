import React from 'react';

const MyCustomNode = ({ x, y, width, height, index, payload }) => {
  const { name, value } = payload;

  // Custom rendering logic for each node
  return (
    <g transform={`translate(${x},${y})`} fill="#8884d8">
      <rect width={width} height={height} rx={10} ry={10} />
      <text x={width / 2} y={height / 2 - 10} textAnchor="middle" dy="0.35em">
        {name}
      </text>
      <text x={width / 2} y={height / 2 + 10} textAnchor="middle" dy="0.35em">
        {value}
      </text>
    </g>
  );
};

export default MyCustomNode;
