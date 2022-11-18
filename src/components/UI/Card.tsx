import React from 'react';
import { CardSection } from '@/components/UI/CardStyle';

interface CartProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: CartProps) {
  return <CardSection className={className}>{children}</CardSection>;
}

export default Card;
