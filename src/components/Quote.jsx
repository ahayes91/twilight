import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function Quote({ quote, onCardSelect, selected, enabled }) {
  const handleClick = () => {
    if (enabled) {
      onCardSelect(quote);
    }
  };

  const selectedAnswer = {
    WebkitBoxShadow: "inset 0px 0px 0px 5px #b2dfdb",
    MozBoxShadow: "inset 0px 0px 0px 5px #b2dfdb",
    boxShadow: "inset 0px 0px 0px 5px #b2dfdb",
  };

  return (
    <Card style={selected ? selectedAnswer : {}}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h5" component="p">
            {quote}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
