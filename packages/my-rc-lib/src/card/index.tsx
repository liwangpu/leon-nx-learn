import { memo } from 'react';

const Card: React.FC = memo(props => {

  return (
    <div>
      card
    </div>
  );
});

Card.displayName = 'Card';

export default Card;