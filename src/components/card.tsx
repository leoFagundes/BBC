import React from "react";

interface CardType {
  title: string;
  linkTitle: string;
  src: string;
}

export default function Card({ linkTitle, src, title }: CardType) {
  return <div>card</div>;
}
