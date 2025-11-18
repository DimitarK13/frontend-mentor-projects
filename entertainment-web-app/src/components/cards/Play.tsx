import playIcon from '../../assets/icon-play.svg';

export default function Play() {
  return (
    <button className="card-play">
      <img className="card-play-icon" src={playIcon} alt="Play button" />
      <p className="card-play-text">Play</p>
    </button>
  );
}
