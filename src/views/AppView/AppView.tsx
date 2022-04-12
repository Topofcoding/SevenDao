import React, { useState } from "react";
import AppHeader from "src/components/AppLayout/AppHeader";
import { IAppSlice } from "../../store/slices/app-slice";
import { IReduxState } from "../../store/slices/state.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppCardGroup, AppViewWrapper, AppCardWrapper, Divider, ModalHeader, ModalContainer, ModalFooter, MintFormWrapper, MintForm, FormLabel } from "./appview.styles";
import Container from "../../components/Container";
import Button from "../../components/Button/Button";
import AppFooter from "src/components/AppLayout/AppFooter";

import skeletonSVG from "../../assets/image/skeleton.gif";
import { Box, FormControl, MenuItem, Modal, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@material-ui/core";
import accountSlice, { IAccountSlice } from "src/store/slices/account-slice";
import { changeApproval, claimReward, mintNode } from "src/store/slices/mint-slice";
import { useWeb3Context } from "../../hooks";
import { prettyDate } from "../../helpers";

interface CardProps {
    title?: string;
    content?: any;
    buttonText?: string;
    desc?: string;
    onClick?: any;
    isModal?: boolean;
    disabled?: boolean;
}

const AppCard: React.FC<CardProps> = ({ onClick, title, disabled, content, buttonText = "", desc }) => {
    return (
        <AppCardWrapper>
            <h3>{title}</h3>
            <h4>{content}</h4>
            {buttonText && <Button disabled={disabled} label={buttonText} onClick={onClick} />}
            <h5>{desc}</h5>
        </AppCardWrapper>
    );
};

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    borderRadius: 10,
    boxShadow: "0 0 20px #00000080",
};

const AppView: React.FC = () => {

    const app = useSelector<IReduxState, IAppSlice>(state => state.app);
    const account = useSelector<IReduxState, IAccountSlice>(state => state.account);
    const dispatch = useDispatch();
    const { provider, address, chainID, checkWrongNetwork } = useWeb3Context();
    const isloading = app.loading || account.loading;
    
    const cardData1 = [
        {
            title: "Documentation",
            content: "All you need to know about SVC",
            buttonText: "📚 Read the docs",
        },
        {
            title: "SVC on QuickSwap",
            content: "Buy at least 25 SVC for a node",
            buttonText: "💰 Buy a SVC bag",
        },
        {
            title: "DAI on QuickSwap",
            content: "Buy at least 25 DAI for a node",
            buttonText: "💰 Buy a DAI bag",
        },
    ];
    
    const cardData2 = [
        {
            title: "Total number of nodes",
            content: isloading? <img src={skeletonSVG} alt="skeleton" /> : app.totalNodeNum,
        },
        {
            title: "Current node rewards",
            content: "Up to 100 SVC per node per day",
        },
        {
            title: "Protocol locked liquidity",
            content: "Coming soon",
        },
    ];
    
    const cardData3 = [
        {
            title: "SVC in rewards pool",
            content: isloading ? <img src={skeletonSVG} alt="skeleton" /> : app.svcDaoBalance,
        },
        {
            title: "DAI treasury value",
            content: "Coming soon",
        },
    ];
    

    const [open, setOpen] = useState(false);    
    const [modal, setModal] = useState("");
    const flag = false;
    const handleOpen = (key: string) => {
        setModal(key);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleClaim = () => {
        dispatch(claimReward({address, networkID: chainID, provider}));
    }
    return (
        <AppViewWrapper>
            <AppHeader />
            <Container>
                <AppCardGroup repeat={3}>
                    <AppCard
                        title={"Number of nodes"}
                        content={isloading ?  <img src={skeletonSVG} alt="skeleton"/> : account.balances.numNodes}
                        buttonText="🧊 Your SVC nodes"
                        disabled={isloading}
                        onClick={() => handleOpen("node")}
                    />
                    <AppCard
                        title={"Rewards accumulated"}
                        content={isloading ? <img src={skeletonSVG} alt="skeleton" /> : account.balances.claimableReward }
                        buttonText={ "🤑 Claim" }
                        onClick={()=> handleClaim()}
                        disabled={!(account.balances.withdrawAvailable && account.balances.claimableReward > 0 )}
                    />
                    {cardData1.map((item: CardProps, key: number) => {
                        return item.title ? <AppCard {...item} key={key} /> : <div />;
                    })}
                    <AppCard 
                        title={"Mint a liquidity node"} 
                        disabled={ account.loading } 
                        content={"Provide tokens: SVC - DAI"} 
                        buttonText={"💦  Mint a liquidity node"} 
                        onClick={() => handleOpen("mint")} 
                    />
                    <div />
                    <AppCard title={"Get a FREE Nano node!"} content={"We give away one node per week to accounts that tweet about us!"} buttonText="🐦 Tweet about SVC" />
                </AppCardGroup>
                <Divider />
                <AppCardGroup repeat={3} style={{ paddingBottom: "48px" }}>
                    {cardData2.map((item: CardProps, key: number) => {
                        return item.title ? <AppCard {...item} key={key} /> : <div />;
                    })}
                </AppCardGroup>
                <AppCardGroup repeat={2} style={{ paddingTop: 0 }}>
                    {cardData3.map((item: CardProps, key: number) => {
                        return item.title ? <AppCard {...item} key={key} /> : <div />;
                    })}
                </AppCardGroup>
            </Container>
            <AppFooter />
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>{modal === "node" ? <NodeModal onCancel={handleClose} /> : <MintModal />}</Box>
            </Modal>
        </AppViewWrapper>
    );
};

const NodeModal: React.FC<any> = ({ onCancel }) => {

    const TableData = [
        { nodeType : "Planck SVC", rewardAmount : "0.1 SVC"},
        { nodeType : "Femto SVC", rewardAmount : "0.3 SVC"},
        { nodeType : "Pico SVC", rewardAmount : "0.6 SVC"},
        { nodeType : "Nano SVC", rewardAmount : "1 SVC"},
        { nodeType : "Mini SVC", rewardAmount : "3 SVC"},
        { nodeType : "Kilo SVC", rewardAmount : "7 SVC"},
        { nodeType : "Mega SVC", rewardAmount : "16 SVC"},
        { nodeType : "Giga SVC", rewardAmount : "100 SVC"}
    ]


    const account = useSelector<IReduxState, IAccountSlice>(state => state.account);

    function createData(node: string, nodeType: string, created: string, rewards: string) {
        return { node, nodeType, created, rewards };
    }

    let rows : Array<any> = [];

    const nodes = account.balances.nodes;

    for(let i=0; i<nodes?.length; i++){
       rows.push(createData(String(i+1), TableData[nodes[i][0].toNumber()].nodeType, prettyDate(nodes[i][1].toNumber()),TableData[nodes[i][0].toNumber()].rewardAmount));
       console.log(nodes[i][1].toNumber())
    }

    return (
        <div>
            <ModalHeader>Your SVC Nodes</ModalHeader>
            <ModalContainer>
                <Table>
                    <TableHead>
                        <TableRow style={{ borderBottom: "2px solid #666" }}>
                            <TableCell style={{ fontWeight: 700 }}>Node</TableCell>
                            <TableCell align="right" style={{ fontWeight: 900 }}>
                                Node type
                            </TableCell>
                            <TableCell align="right" style={{ fontWeight: 900 }}>
                                Created At
                            </TableCell>
                            <TableCell align="right" style={{ fontWeight: 900 }}>
                                SVC rewards
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {row.node}
                                </TableCell>
                                <TableCell align="right" style={{ fontWeight: 700 }}>{row.nodeType}</TableCell>
                                <TableCell align="right" style={{ fontWeight: 700 }}>{row.created}</TableCell>
                                <TableCell align="right" style={{ fontWeight: 700 }}>{row.rewards}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ModalContainer>
            <ModalFooter>
                <Button label={"Close"} onClick={onCancel} />
            </ModalFooter>
        </div>
    );
};

const MintModal: React.FC<any> = ({ onCancel }) => {

    const { provider, address, chainID, checkWrongNetwork } = useWeb3Context();
    const dispatch = useDispatch();
    const RowData = [
        { tokenAmount: { svc: 25, dai: 25 }, label: "Planck SVC | 25SVC x 25DAI | 0.1 SVC per day" },
        { tokenAmount: { svc: 50, dai: 50 }, label: "Femto SVC | 50SVC x 50DAI | 0.3 SVC per day" },
        { tokenAmount: { svc: 75, dai: 75 }, label: "Pico SVC | 75SVC x 75DAI | 0.6 SVC per day" },
        { tokenAmount: { svc: 100, dai: 100 }, label: "Nano SVC | 100SVC x 100DAI | 1 SVC per day" },
        { tokenAmount: { svc: 250, dai: 250 }, label: "Mini SVC | 250SVC x 250DAI | 3 SVC per day" },
        { tokenAmount: { svc: 500, dai: 500 }, label: "Kilo SVC | 500SVC x 500DAI | 7 SVC per day" },
        { tokenAmount: { svc: 1000, dai: 1000 }, label: "Mega SVC | 1000SVC x 1000DAI | 16 SVC per day" },
        { tokenAmount: { svc: 5000, dai: 5000 }, label: "Giga SVC | 5000SVC x 5000DAI | 100 SVC per day" },
    ];

    const account = useSelector<IReduxState, IAccountSlice>(state => state.account);
    const [flag, setFlag] = useState(false);
    const [selected, setSelect] = useState(-1);
    const [tokenAmount, setTokenAmount] = useState<any>({});
    const handleNext = () => {
        console.log(selected)
        if (selected > -1) {
            setFlag(true);
        }
    };
    const handleMint = async () => {
        if (await checkWrongNetwork()) return;
        dispatch(mintNode({type: selected, address, networkID: chainID, provider}));
    };

    const handleChange = (event: any) => {
        console.log(event.target.value)
        setSelect(event.target.value);
        setTokenAmount(RowData[event.target.value].tokenAmount);
    };

    const handleProvideSVC = async () => {
        if (await checkWrongNetwork()) return;
        dispatch(changeApproval({ token : "svc",amount : tokenAmount.svc , provider, networkID : chainID, address}));
    };

    const handleProvideDAI = async () => {
        if (await checkWrongNetwork()) return;
        dispatch(changeApproval({ token : "dai" ,amount : tokenAmount.dai, provider, networkID : chainID, address}));
    };

    return (
        <div>
            <ModalHeader>Mint a SVC node</ModalHeader>
            {flag ? (
                <ModalContainer>
                    <div className="select-label">
                        Provide exactly <b>{tokenAmount.svc} SVC</b> and <b>{tokenAmount.dai} DAI </b>for a liquidity node.
                    </div>
                    <MintFormWrapper>
                        <FormLabel>{account.balances.svc} SVC Available</FormLabel>
                        <MintForm>
                            <Button  
                                label={`Provide ${tokenAmount.svc} SVC`} 
                                disabled={ !(account.balances.svcAllowed < tokenAmount.svc && account.balances.svc > tokenAmount.svc)} 
                                onClick={handleProvideSVC} 
                            />
                            {(account.balances.svcAllowed >= tokenAmount.svc && account.balances.svc >= tokenAmount.svc) && <i className="bi bi-check2"></i>}
                        </MintForm>
                    </MintFormWrapper>
                    <MintFormWrapper>
                        <FormLabel>{account.balances.dai} DAI Available</FormLabel>
                        <MintForm>
                            <Button 
                                label={`Provide ${tokenAmount.dai} DAI`} 
                                onClick={handleProvideDAI} 
                                disabled={!(account.balances.daiAllowed < tokenAmount.dai && account.balances.dai > tokenAmount.dai)}
                            />
                            {(account.balances.daiAllowed >= tokenAmount.dai && account.balances.dai >= tokenAmount.dai) &&  <i className="bi bi-check2"></i>}
                        </MintForm>
                    </MintFormWrapper>
                </ModalContainer>
            ) : (
                <ModalContainer>
                    <div className="select-label">Select a SVC node type...</div>
                    <FormControl size="small" style={{ width: "90%" }}>
                        <Select labelId="demo-select-small" id="demo-select-small" value={selected} label="Age" style={{ width: "100%" }} onChange={handleChange}>
                            <MenuItem value={-1}>
                                <em>Select your SVC node</em>
                            </MenuItem>
                            {RowData.map((item: any, key: any) => (
                                <MenuItem value={key} key={key}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </ModalContainer>
            )}
            <ModalFooter>
                <Button 
                    label={flag ? "Mint Node" : "Next"} 
                    onClick={flag ? handleMint : handleNext} 
                    disabled={ flag && 
                       !((account.balances.svcAllowed >= tokenAmount.svc && account.balances.svc >= tokenAmount.svc) &&
                        (account.balances.daiAllowed >= tokenAmount.dai && account.balances.dai >= tokenAmount.dai))
                    }
                />
            </ModalFooter>
        </div>
    );
};



export default AppView;
