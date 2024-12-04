import { Image, MarkdownRender } from '@douyinfe/semi-ui';
import player_list from '../../assets/changelogs/20240905/player_list.webp';
import player_trends from '../../assets/changelogs/20240905/player_trends.webp';

export function Change20240905() {
  const rawString = `
### First version:

#### 2024-09-05

Support FC24 Manager career mode player's list and player's trends.

Depends on the FC24 Live Editor and lua script.

- Player's list: You can view all players in the team. including their basic information(name, avatar, position, player_id, age, overall, potential)
- Player's Trends: You can view the player's overall and potential trends. And automatically tracking the player's overall and potential.
`;

  return (
    <>
      <MarkdownRender raw={rawString} />
      <Image width={800} src={player_list} />
      <Image width={800} src={player_trends} />
    </>
  );
}

export default Change20240905;
