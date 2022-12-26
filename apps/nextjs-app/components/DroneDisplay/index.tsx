import { Drone } from '@prisma/client';
import React, { useEffect, useRef } from 'react';
import { isDroneViolatingPerimeter } from '@reaktor-birdnest/utils';
import useSWR from 'swr';

interface DroneDisplayProps {
  width: number;
  height: number;
}

interface DroneDisplayCanvasProps extends DroneDisplayProps {
  drones: Drone[];
}

const DroneDisplayCanvas: React.FunctionComponent<DroneDisplayCanvasProps> = ({ width, height, drones }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context == null) return;
      //Our first draw
      context.fillStyle = '#fff';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.beginPath();
      context.arc(500 / 2, 500 / 2, 0.1, 0, 360, false);
      context.strokeStyle = 'red';
      context.stroke();
      context.lineWidth = 5;
      context.closePath();

      context.beginPath();
      context.arc(500 / 2, 500 / 2, 125, 0, 360, false);
      context.strokeStyle = 'pink';
      context.stroke();
      context.lineWidth = 5;
      context.closePath();

      if (drones) {
        drones.forEach(drone => {
          context.beginPath();
          context.arc(Math.floor(drone.positionX / 1000), Math.floor(drone.positionY / 1000), 0.1, 0, 360, false);

          context.strokeStyle = isDroneViolatingPerimeter(
            Math.floor(drone.positionX / 1000),
            Math.floor(drone.positionY / 1000),
            250,
            500,
            500
          )
            ? 'pink'
            : 'black';
          context.stroke();
          context.lineWidth = 5;
          context.closePath();
        });
      }
    }
  }, [drones]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

const DroneDisplay: React.FunctionComponent<DroneDisplayProps> = ({ width, height }) => {
  const { data, error } = useSWR('/api/drones', url => fetch(url).then(res => res.json()));

  if (error) return <div>Error</div>;

  if (!data) return <div>Loading...</div>;

  return <DroneDisplayCanvas width={width} height={height} drones={data} />;
};

export default DroneDisplay;
