import {ethers} from 'hardhat';
import {zeroAddress} from '../utils/constants';

async function main() {

  // get contracts
  const Treasury = await ethers.getContract('RomeTreasury');

  const Distributor = await ethers.getContract('Distributor');

  const RomeMovrBonds = await ethers.getContract('ROMEMOVRBondDepository');

  const MovrBonds = await ethers.getContract('MOVRBondDepository');

  const RomeFraxBonds = await ethers.getContract('ROMEFRAXBondDepository');

  const FraxBonds = await ethers.getContract('FRAXBondDepository');

  const RomeMimBonds = await ethers.getContract('ROMEMIMBondDepository');

  const MimBonds = await ethers.getContract('MIMBondDepository');

  // queue reserve depositor toggle for bonds and DAO
  await Treasury.toggle( '0', FraxBonds.address, zeroAddress );
  await Treasury.toggle( '0', MimBonds.address, zeroAddress );
  await Treasury.toggle( '0', DAO, zeroAddress );
  // queue liquidity depositor toggle for bonds
  await Treasury.toggle( '4', RomeFraxBonds.address, zeroAddress );
  await Treasury.toggle( '4', RomeMimBonds.address, zeroAddress );
  // queue reserve depositor toggle for bonds
  await Treasury.toggle( '8', MovrBonds.address, zeroAddress );
  await Treasury.toggle( '8', RomeMovrBonds.address, zeroAddress );
  await Treasury.toggle( '8', Distributor.address, zeroAddress );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
