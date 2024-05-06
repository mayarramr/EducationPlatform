import React, { useEffect, useRef } from 'react';
import { sankey as d3Sankey, sankeyLinkHorizontal } from 'd3-sankey';
import { select } from 'd3-selection';
import { format } from 'd3-format'; // Import format function from d3

const SankeyChart = ({ width, height, data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    const sankey = d3Sankey()
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 1], [width - 1, height - 6]]);

    const { nodes, links } = sankey(data);

    svg.selectAll('*').remove();

    svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('rect')
      .data(nodes)
      .join('rect')
      .attr('x', (d) => d.x0)
      .attr('y', (d) => d.y0)
      .attr('height', (d) => d.y1 - d.y0)
      .attr('width', (d) => d.x1 - d.x0)
      .attr('fill', '#69b3a2')
      .append('title')
      .text((d) => `${d.name}\n${format('.2s')(d.value)}`); // Include both node name and value in the tooltip

    // Add text labels for nodes
    svg
      .append('g')
      .attr('class', 'node-labels')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .attr('x', (d) => (d.x0 + d.x1) / 2)
      .attr('y', (d) => (d.y0 + d.y1) / 2) // Center the text vertically
      .attr('dy', (d) => (d.y1 - d.y0) / 2 + 3) // Adjust for font size and positioning
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) => Math.min(14, (d.y1 - d.y0) / 2)) // Dynamic font size
      .text((d) => `${d.name} - ${format('.2s')(d.value)}`); // Combine node name and value

    svg
      .append('g')
      .attr('class', 'links')
      .selectAll('path')
      .data(links)
      .join('path')
      .attr('d', sankeyLinkHorizontal())
      .attr('stroke', (d, i) => ['#A3FCE2', '#37E89E', '#0EDA84', '#09BC71'][i % 4]) // Change the color for each link
      .attr('stroke-width', (d) => Math.max(3, Math.sqrt(d.width) * 2)) // Increase the stroke width
      .attr('fill', 'none');

  }, [data, height, width]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default SankeyChart;
