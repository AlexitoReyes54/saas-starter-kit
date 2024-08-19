interface CTAButtonProps {
  url?: string;
  text: string;
}

const CTAButton = (props: CTAButtonProps) => {
  const hubspotUrl = 'https://share.hsforms.com/10nQy-jM3R-ukgcwlgJon7grdcrm';
  const url = props.url || hubspotUrl;
  return (
    <a
      href={url}
      className="btn btn-outline"
      style={{
        color: '#fe3146ff',
        borderColor: '#fe3146ff',
      }}
      target="_blank"
    >
      {props.text}
    </a>
  );
};

export default CTAButton;
