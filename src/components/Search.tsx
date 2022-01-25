import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LinearProgress from "@mui/material/LinearProgress";


export default function Search({
    value,
    placeholder = "Search",
}: SearchProps) {
    const [searchValue, setSearchValue] = useState(value);

    const [progressValue, setProgressValue] = useState<boolean>(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        //set progress to true
        setProgressValue(true);
        // Call the Search hook


    };

    return (
        <div>
            <Paper
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <StyledInputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={placeholder}
                    inputProps={{ "aria-label": placeholder }}
                    fullWidth
                    autoComplete="q"
                    onChange={onChange}
                    defaultValue={value}
                    name="q"
                />
                <IconButton
                    type="submit"
                    sx={{ p: "10px", borderRadius: 2 }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
            {progressValue && (
                <LinearProgress
                    style={{
                        borderRadius: "9px",
                        width: "97%",
                        margin: "auto",
                    }}
                />
            )}
        </div>
    );
}

const StyledInputBase = styled(InputBase)({
    "& input": {
        padding: "4px 7px",
        borderRadius: "2px",
    },
    "& input:hover": {
        backgroungColor: "#000",
    },
});

interface SearchProps {
    value: string;
    placeholder: string;
    location: string;
}
