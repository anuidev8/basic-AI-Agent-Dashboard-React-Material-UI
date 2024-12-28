import { FC } from "react";
import { StatCardProps } from "./types";
import { Box, Card, IconButton, Typography } from "@mui/material";

export const StatCard: FC<StatCardProps> = ({ title, value, icon, trend }) => {
  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <IconButton size="small" color="primary">
          {icon}
        </IconButton>
      </Box>
      <Typography variant="h3">{value}</Typography>
      {
        trend && 
        <Box display={"flex"} alignItems="center">
            <Typography variant="caption" color={trend.isPositive ? 'success.main' : 'error.main'}>
                {trend.isPositive ? '+' : '-'}{trend.value}
            </Typography>
        </Box> 
      }
    </Card>
  );
};
