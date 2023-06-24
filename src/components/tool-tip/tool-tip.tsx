import icon from '../../images/info-icon.svg';
import styles from '../../styles/tool-tip.module.scss';

type Props = {
  description: string;
};
export default function ToolTip({ description }: Props) {
  return (
    <div role='tooltip' className={styles.container}>
      <img src={icon} alt='info' />
      <div className={styles.tool_tip}>
        <p>{description}</p>
      </div>
    </div>
  );
}
