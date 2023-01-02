import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = (props) => {
  const { title, statistics } = props;
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles['stat-list']}>
        {statistics.map((statistic, index) => (
          <li className={styles['item' + (index % 3)]} key={statistic.id}>
            <span className={styles.label}>{statistic.label}</span>
            <span className={styles.percentage}>{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
