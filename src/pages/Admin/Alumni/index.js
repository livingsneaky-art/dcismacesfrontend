import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Header from "../../../components/header";
import DataTable from "../../../components/dataTable";
import { alumniColumns } from "../../../components/constant/adminColumnHeaders";
import { AlumniRows } from "../../../data/mockAdminData";


const Alumni = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="1.5rem 2.5rem">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Header title="Alumni" subtitle="List of Alumni" />
                <Box display="flex" gap="15px">
                    <Button
                        variant="contained"
                        size="medium"
                        style={{ backgroundColor: colors.greenAccent[500] }}
                    >
                        Add User
                    </Button>
                    <Button
                        variant="contained"
                        size="medium"
                        style={{ backgroundColor: colors.primary[500] }}
                    >
                        Upload CSV
                    </Button>
                </Box>
            </Box>
            <DataTable slug="alumni" columns={alumniColumns} rows={AlumniRows} />
        </Box>
    );
};

export default Alumni;