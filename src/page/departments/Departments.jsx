import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import Card from "../../components/card/Card";
import { dataDepartment, dataBreadCrumbs } from "../../constant";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FetchDataService } from "../../redux/authSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  AddService,
  DeleteService,
  FetchService,
  AddServicOutCategogy,
} from "../../redux/authSlice";
import Loading from "../loading/Loading";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
const StyleSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h5 {
    margin: 0;
  }
  input {
    border: 1px solid black;
    border-radius: 100px;
    outline: none;
    padding: 6px 20px;
  }
  input:focus {
    border: 1px solid blue;
  }
`;

function Departments(props) {
  const role = localStorage.getItem("role");
  const path = useLocation();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);
  const token = localStorage.getItem("token");
  const [state, setState] = useState(token);
  const [edit, setEdit] = useState(false);
  const [edit1, setEdit1] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);
  const [valueService, setValueService] = useState({
    name: "",
    totalPrice: "",
    servicebaseId: "",
  });
  const [dataSelect, setDataSelect] = useState([]);
  const GetData = async (value) => {
    setLoading(true);
    try {
      await dispatch(FetchDataService(value))
        .unwrap()
        .then((res) => {
          setDataSelect(res);
          const newData = res.map((item, index) => {
            return { ...item, ...dataDepartment[index] };
          });
          setData(newData);
        });

      await dispatch(FetchService(value))
        .unwrap()
        .then((res) => {
          setDataDetail(res);
        });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("có lỗi xảy ra ");
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    // if (token) {
    GetData(token);
    setState(token);
    // }
  }, [token, active]);
  const handleClick = () => {
    setEdit(!edit);
  };
  const handleSubmit = async () => {
    setEdit(!edit);
    if (!value) {
      return toast.warning("bạn cần điền field");
    }
    setLoading(true);
    try {
      await dispatch(
        AddService({
          value,
          token,
        })
      ).then((res) => {
        setLoading(false);
        setValue("");
        setActive(!active);
        toast.success("tạo category thành công ");
      });
    } catch (error) {
      setLoading(false);
      setActive(!active);
    }
  };
  const typingRef = useRef(null);
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    typingRef.current = setTimeout(() => {
      handleFilter(value);
    }, 300);
  };
  const handleFilter = (value) => {
    if (value) {
      const newData = [...data].filter((item) =>
        item.title.toLocaleLowerCase().includes(value)
      );
      setData(newData);
    } else {
      setData(dataDepartment);
    }
  };

  const getBreadCrumbs = () => {
    if (dataBreadCrumbs.find((item) => item.path === path.pathname)) {
      return dataBreadCrumbs.find((item) => item.path === path.pathname).title;
    } else {
      return "sai";
    }
  };

  const handleChooseService = () => {
    // if (!state) {
    //   toast.warning("Bạn cần đăng nhập để đăng kí dịch vụ của chúng tôi !");
    // }
  };
  if (loading) {
    return <Loading />;
  }
  const hanldeDelete = async (url) => {
    console.log("url", url);
    setLoading(true);
    setEdit(!edit);
    try {
      await dispatch(
        DeleteService({
          url,
          token,
        })
      ).then((res) => {
        setLoading(false);
        setActive(!active);
        toast.success("xóa thành công ");
      });
    } catch (error) {
      setLoading(false);
      setActive(!active);
    }
  };
  const handleClick1 = () => {
    setEdit1(!edit1);
  };
  const handleSubmit1 = async () => {
    setEdit1(!edit1);
    if (
      !valueService.name ||
      !valueService.totalPrice ||
      !valueService.servicebaseId
    ) {
      return toast.warning("bạn cần điền field");
    }
    setLoading(true);
    setEdit(!edit);
    try {
      await dispatch(
        AddServicOutCategogy({
          ...valueService,
          token,
        })
      ).then((res) => {
        setLoading(false);
        setValue("");
        setActive(!active);
        toast.success("tạo dịch vụ thành công ");
      });
    } catch (error) {
      setLoading(false);
      setActive(!active);
    }
  };

  return (
    <div className="container">
      <BreadCrumbs getBreadCrumbs={getBreadCrumbs} />
      {/* <StyleSearch className="mt-4 mb-5">
        <h5>Search</h5>
        <input
          type="text"
          placeholder="Tìm chuyên khoa"
          onChange={handleSearch}
          value={search}
        />
      </StyleSearch> */}
      {role === "1" || role === "1" ? (
        !edit ? (
          <Button className="my-3" variant="contained" onClick={handleClick}>
            Thêm Category
          </Button>
        ) : (
          <Button className="my-3" variant="contained" onClick={handleSubmit}>
            submit
          </Button>
        )
      ) : (
        ""
      )}
      <div>
        {role === "1" || role === "1" ? (
          !edit1 ? (
            <Button className="my-3" variant="contained" onClick={handleClick1}>
              Thêm dịch vụ
            </Button>
          ) : (
            <Button
              className="my-3"
              variant="contained"
              onClick={handleSubmit1}
            >
              submit
            </Button>
          )
        ) : (
          ""
        )}
      </div>
      {edit ? (
        <div className="mb-4">
          <TextField
            id="outlined-basic"
            label="Edit Name"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      ) : null}
      {edit1 ? (
        <div className="mb-4">
          <TextField
            sx={{ width: 200 }}
            id="outlined-basic"
            label="Tên dịch vụ"
            variant="outlined"
            value={valueService.name}
            onChange={(e) =>
              setValueService({ ...valueService, name: e.target.value })
            }
          />
          <div className="my-3">
            <FormControl sx={{ width: 200 }}>
              <InputLabel id="demo-simple-select-label">Giá dịch vụ</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valueService.servicebaseId}
                label="Price"
                onChange={(e) =>
                  setValueService({
                    ...valueService,
                    servicebaseId: e.target.value,
                  })
                }
              >
                {dataSelect.length > 0
                  ? dataSelect.map((item) => (
                      <MenuItem key={item._id} value={item._id}>
                        {item.name}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
          </div>
          <TextField
            sx={{ width: 200 }}
            id="outlined-basic"
            label="Giá dịch vụ"
            variant="outlined"
            value={valueService.totalPrice}
            onChange={(e) =>
              setValueService({ ...valueService, totalPrice: e.target.value })
            }
          />
        </div>
      ) : null}
      <StyleGrid>
        {data
          ? data.map((item, index) => (
              <div
                onClick={handleChooseService}
                key={item.id}
                style={{ cursor: "pointer", margin: "20px 0" }}
              >
                <Card
                  data={
                    dataDetail.length > 0
                      ? dataDetail.filter((el) => el.servicebaseId === item._id)
                      : "hello"
                  }
                  img={item.img}
                  title={item.name}
                  width={240}
                  // link={item.path}
                  role={role}
                  link={`${item._id}`}
                  token={state}
                  hanldeDelete={hanldeDelete}
                />
              </div>
            ))
          : ""}
      </StyleGrid>
    </div>
  );
}

export default Departments;
