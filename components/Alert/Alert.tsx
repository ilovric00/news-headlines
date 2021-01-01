import cn from 'classnames';
import Container from '../Container';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => (
  <div
    className={cn('border-b', {
      'bg-accent-7 border-accent-7 text-white': preview,
      'bg-accent-1 border-accent-2': !preview,
    })}
  >
    <Container>
      <div className="py-2 text-center text-sm">
        {preview ? (
          <>
            This page is a preview.
            <a href="/api/exit-preview" className="underline hover:text-cyan duration-200 transition-colors">
              Click here
            </a>
            to exit preview mode.
          </>
        ) : null}
      </div>
    </Container>
  </div>
);

export default Alert;
