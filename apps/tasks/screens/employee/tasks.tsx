import React, { useEffect, useState } from "react";
import Text from "../../components/text";
import { FaCirclePlus, FaEye, FaPen } from "react-icons/fa6";
import { getTheme, SERVER_URL, setAlert, setLoadingState } from "../../model/data";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "../../types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Table from "../../components/table";
import Header from "../../components/header";
import Modal from "../../components/modal"
import { DELETE, GET } from "../../utils/HTTP";
import AddTask from "../../components/add_task";
import Input from "../../components/input"



const tasks = () => {
  // company details
  // departments in the company
  // adding a new department

  const theme: Theme = useSelector(getTheme);
  const [open, setOpen] = useState(false);
  const server = useSelector(SERVER_URL);
  const [tasks, setTasks] = useState<any[]>([]);
  const { id } = useParams();
  const dispatch = useDispatch()
  const [details, setDetails] = useState("")
  const [hours, setHours] = useState(0)

  const { state } = useLocation();
  const [loading, setLoading] = useState(false)

  const [startDate, setStartDate] = useState({
    value: "",
    error: null
  })

  const [endDate, setEndDate] = useState({
    value: "",
    error: null
  })

  const [search, setSearch] = useState({
    value: "",
    error: null
  })

  useEffect(() => {
    GET({path: "/tasks/" + id, setData: setTasks, setLoading: setLoading})
  }, []);

  useEffect(()=>{
    dispatch(setLoadingState(loading))
  },[loading])

  const showBody=(row: any)=>{
    setDetails(row["body"])
  }

  const getTotalHours=()=>{

    if(filteredTasks?.length )

    if(tasks?.length != 0){
      let total = 0
      tasks?.forEach(task => {
        total += parseFloat(task["duration"])
      })
      setHours(total)
    }
  }

  useEffect(()=>{
    getTotalHours()
  },[tasks])

  const setter=(id)=>{
    dispatch(setAlert({title: "", body: "", mode: "normal"}))
    DELETE({data: tasks, setData: setTasks, path: "/task/" + id,id: id })
    getTotalHours()
  }

  const [filteredTasks, setFilteredTasks] = useState([])

  const searchTasks=(query: string)=>{
    const results = tasks?.filter(task => task?.body?.includes(query?.toString()))
    if(results?.length !=0 ){
      setFilteredTasks(results)
    }else{
      setFilteredTasks([])
    }
  }

  const filterTasks =(startDate:string, endDate: string)=>{
      const start = startDate ? new Date(startDate).getTime() : new Date().getTime()
      const end = endDate ? new Date(endDate).getTime() : new Date().getTime()
      
      const results = []
      tasks.forEach(task =>{
        const _date = new Date(task.created_at).getTime()
        if(_date >= start && _date <= end ){
          results.push(task)
        }
      })

      setFilteredTasks(results)

  }

  useEffect(()=>{

    if(startDate && endDate){
      filterTasks(startDate.value, endDate.value)
    }

  }, [startDate, endDate])

  useEffect(()=>{

    if(search?.value != ""){
      searchTasks(search?.value)
    }

  },[search])

  return (
    <div>
      {/* header  */}
      <Header
        title="a task"
        setOpen={setOpen}
        count={tasks?.length}
        heading="Tasks"
      />

      {/* sub header  */}
      <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
          boxShadow: "10px 10px 20px rgba(0,0,0,.05)",
          backgroundColor: theme?.paper,
          borderRadius: 5,
          padding: 15

      }}
      >

        {/* filter  */}
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          
        }}
        >
          {/* start date  */}
        <Input noBorder zeroMargin setter={setStartDate} input={startDate}  type={"date"} placeholder={"Starting date"}/>

        <div style={{margin:"0px 10px"}}/>

        {/* end date  */}
        <Input noBorder zeroMargin setter={setEndDate} input={endDate}  type={"date"} placeholder={"ending date"}/>
        

        </div>

        {/* search  */}
        <Input zeroMargin noBorder setter={setSearch} input={search}  type={"search"} placeholder={"search for tasks"}/>
        

      </div>

      {/* total number of working hours  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
          background: theme?.paper,
          boxShadow: "10px 10px 20px rgba(0,0,0,.05)",
          borderRadius: 5,
          width: "max-content",
          padding: "18px 20px"
          
        }}
        >
          <Text>Total Number of working hours</Text>
          <div
            style={{
              // background: theme?.error,
              // height: 30,
              // width: 60,
              padding: "3px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100px",
              marginLeft: 8
            }}
          >
            <Text heading>{Math.floor(hours/60) + ` hour${Math.floor(hours/60) == 1 ? "" : "s"} and ` + hours%60 + " minutes"}</Text>
          </div>
        </div>


      {/* body  */}
      {

        search?.value || startDate.value || endDate.value
        ?
        filteredTasks?.length == 0
        ?
        <Text is_h1>No results found</Text>
        :
        <Table
        setter={setter}
        showBody={showBody}
        columns={["body", "duration"]}
        rows={filteredTasks}
        delete
        edit
        view
        // redirect_path="/department"
      />
        :

        tasks?.length == 0
        ?
        <Text is_h1>No results found</Text>
        :
        <Table
        setter={setter}
        showBody={showBody}
        columns={["body", "duration"]}
        rows={tasks}
        delete
        edit
        view
        // redirect_path="/department"
      />

      
      }

      {
        details && <Modal open={Boolean(details)} setOpen={setDetails} content={<Text justify>{details}</Text>} title="Task details"/>
      }

      {open && <Modal title="add task" open={open} setOpen={setOpen} content={<AddTask setData={setTasks} data={tasks} setOpen={setOpen}/>}/>
      }
    </div>
  );
};

export default tasks;
