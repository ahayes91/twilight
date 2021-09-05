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
    WebkitBoxShadow: "inset 0px 0px 0px 5px red",
    MozBoxShadow: "inset 0px 0px 0px 5px red",
    boxShadow: "inset 0px 0px 0px 5px red",
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
