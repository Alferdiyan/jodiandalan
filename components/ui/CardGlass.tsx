import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  cardTitle: string;
  description: string;
  images: StaticImageData;
};

export default function CardGlass({ cardTitle, description, images }: Props) {
  return (
    <div>
      <div className="card h-[400px] sm:h-[600px] w-[400px] sm:w-[500px] glass">
        <figure>
          <Image src={images} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn more!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
