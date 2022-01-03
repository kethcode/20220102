// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <=0.8.11;

/**
 * @title SoladayContract
 * @dev Standard event interface for announcing deployments
 * @author kethcode (https://github.com/kethcode)
 */
contract SoladayContract {

    /*********
    * Events *
    **********/
    
    /**     * Announce a Deployment
     * @param _contract Address of deployed Contract
     * @param _deployer Address of account that deployed the Contract
     * @param _timestamp Timestamp of current block of deployment, 
     */
    event SolidayContractDeployed(
        address indexed _contract,
        address indexed _deployer, 
        uint256 _timestamp
    );

    /************
    * Variables *
    *************/

    /*******************
    * Public Functions *
    ********************/

    constructor() {
        // console.log("SoladayContract constructor()");
        // console.log(address(this));
        // console.log(msg.sender);
        // console.log(block.timestamp);

        emit SolidayContractDeployed ( 
            address(this),
            msg.sender,
            block.timestamp
        );
    }

}
