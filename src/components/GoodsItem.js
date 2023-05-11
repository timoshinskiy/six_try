import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";


const GoodsItem = (props) => {
    const { name, price, poster, setOrder , description } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                }}
            >
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h3"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="h6">
                        {description}
                    </Typography>
                    <Typography variant="body1">Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;