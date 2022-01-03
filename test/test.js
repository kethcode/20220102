const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SoladayRegistry", function () {

    it("Should Deploy", async function () {

        let accounts = await ethers.getSigners()
        const todayFactory = await ethers.getContractFactory("SoladayRegistry");
        const todayContract = await todayFactory.deploy();
        await todayContract.deployed();

        

        describe("registerDeployment", function () {

            it("Should emit SolidayContractRegistered with expected parameters", async function () {

                console.log("_contract:", accounts[2].address);
                console.log("_deployer:", accounts[1].address);
                expect(
                    await todayContract.registerDeployment(accounts[2].address, accounts[1].address)
                )
                .to.emit(todayContract, 'SolidayContractRegistered')
                .withArgs(
                    accounts[2].address, 
                    accounts[1].address
                    )
            });
        });

        describe("registerDeployment", function () {

            it("Should emit SolidayContractRegistered with expected parameters", async function () {

                console.log("_contract:", accounts[3].address);
                console.log("_deployer:", accounts[1].address);
                expect(
                    await todayContract.registerDeployment(accounts[3].address, accounts[1].address)
                )
                .to.emit(todayContract, 'SolidayContractRegistered')
                .withArgs(
                    accounts[3].address, 
                    accounts[1].address
                    )
            });
        });

        describe("registerDeployment", function () {

            it("Should emit SolidayContractRegistered with expected parameters", async function () {

                console.log("_contract:", accounts[5].address);
                console.log("_deployer:", accounts[4].address);
                expect(
                    await todayContract.registerDeployment(accounts[5].address, accounts[4].address)
                )
                .to.emit(todayContract, 'SolidayContractRegistered')
                .withArgs(
                    accounts[5].address, 
                    accounts[4].address
                    )
            });
        });

        describe("getDeployers", function () {

            it("Should Return Deployers", async function () {
                let deployers = await todayContract.getDeployers();
                console.log("deployers:", deployers);
                expect(deployers).to.have.members([accounts[1].address, accounts[4].address])
            });
        });

        describe("getDeployments", function () {

            it("Should Return Deployments", async function () {
                let deployers = await todayContract.getDeployers();
                console.log("deployers:", deployers);
                let deployments = await todayContract.getDeployments(accounts[1].address);
                console.log("deployments:", deployments);
                expect(deployments).to.have.members([accounts[2].address, accounts[3].address])
            });
        });


        describe("getDeployments", function () {

            it("Should Return Deployments", async function () {
                let deployers = await todayContract.getDeployers();
                console.log("deployers:", deployers);
                let deployments = await todayContract.getDeployments(accounts[4].address);
                console.log("deployments:", deployments);
                expect(deployments).to.have.members([accounts[5].address])
            });
        }); 
    });
});