import { css, RecipeVariant } from '../styled-system/css';
import { circle } from '../styled-system/patterns';
import { timeline as timelineConfig } from '../styled-system/recipes';

const CheckIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.6667 3.5L5.25004 9.91667L2.33337 7'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

interface TimelineStep {
  title: string;
  description: string;
  completed?: boolean;
}

type RecipeProps = RecipeVariant<typeof timelineConfig>;

interface TimelineProps extends RecipeProps {
  steps: TimelineStep[];
}

function Timeline(props: TimelineProps) {
  const [recipeProps, otherProps] = timelineConfig.splitVariantProps(props);
  const { steps, ...rest } = otherProps;

  const timeline = timelineConfig(recipeProps);

  return (
    <div className={timeline.root} {...rest}>
      {steps.map((step, index) => (
        <div key={index} className={timeline.item}>
          <div className={timeline.indicatorContainer}>
            <div className={timeline.indicator}>
              {step.completed ? (
                <div className={circle({ size: '100%', bg: '#3A3A3A' })}>
                  <CheckIcon />
                </div>
              ) : (
                <div
                  className={circle({
                    size: '100%',
                    borderWidth: '2px',
                    borderColor: '#D9D9D9',
                  })}
                />
              )}
            </div>
            <div className={timeline.separator} />
          </div>

          <div className={timeline.content}>
            <div className={timeline.title}>{step.title}</div>
            <div className={timeline.description}>{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    >
      <Timeline
        size='small'
        steps={[
          {
            title: 'Ordered',
            description: '9:15 AM, January 2024',
            completed: true,
          },
          {
            title: 'Shipped',
            description: '12:45 PM, January 5, 2024',
            completed: true,
          },
          {
            title: 'Out for delivery',
            description: '07:00 AM, January 8, 2024',
          },
          {
            title: 'Delivered',
            description: 'Estimated delivery today by 5:30 PM',
          },
        ]}
      />
    </div>
  );
}

export default App;
